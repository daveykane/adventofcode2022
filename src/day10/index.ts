const runProgram = (program: string[]): { sum: number; display: string } => {
  let sum = 0;
  let cycle = 0;
  let register = 1;
  const crt: string[] = [""];

  const cycleCpu = () => {
    crt[crt.length - 1] += Math.abs((cycle % 40) - register) <= 1 ? "#" : ".";
    cycle++;

    if (cycle % 40 === 20) sum += cycle * register;
    if (crt[crt.length - 1].length % 40 === 0 && cycle < 240) crt.push("");
  };

  program.forEach((instruction) => {
    const [command, value] = instruction.split(" ");

    cycleCpu();

    if (command === "addx") {
      cycleCpu();
      register += Number(value);
    }
  });

  return { sum, display: crt.join("\n") };
};

export const part1 = (program: string[]): number => runProgram(program).sum;
export const part2 = (program: string[]): string => runProgram(program).display;
