type Directory = { files: string[]; size: number };

const mkdir = (): Directory => ({ files: [], size: 0 });
const getDirectories = (output: string): Record<string, Directory> => {
  let currentDir = "/";
  const fileSystem: Record<string, Directory> = { [currentDir]: mkdir() };

  output
    .split("\n")
    .slice(1)
    .forEach((line) => {
      if (line === "$ cd ..") {
        currentDir = currentDir.substring(0, currentDir.lastIndexOf("."));
      } else if (line.startsWith("$ cd ")) {
        currentDir += `.${line.substring(5)}`;
      } else if (line.startsWith("dir ")) {
        fileSystem[`${currentDir}.${line.substring(4)}`] = mkdir();
      } else if (line.match(/^\d+/)) {
        const [size, name] = line.split(" ");

        if (!fileSystem[currentDir].files.includes(name)) {
          fileSystem[currentDir].files.push(name);
          fileSystem[currentDir].size += parseInt(size, 10);
        }
      }
    });

  // Add indirect sizes
  Object.keys(fileSystem).forEach((path) => {
    let pointer = path.substring(0, path.lastIndexOf("."));

    while (pointer) {
      fileSystem[pointer].size += fileSystem[path].size;
      pointer = pointer.substring(0, pointer.lastIndexOf("."));
    }
  });

  return fileSystem;
};

export const part1 = (output: string): number => {
  return Object.values(getDirectories(output)).reduce((total, { size }) => (size <= 100000 ? total + size : total), 0);
};

export const part2 = (output: string): number | undefined => {
  const directories = getDirectories(output);
  const required = 30000000 - (70000000 - directories["/"].size);

  return Object.values(directories)
    .map(({ size }) => size)
    .sort((a, b) => a - b)
    .find((size) => size >= required);
};
