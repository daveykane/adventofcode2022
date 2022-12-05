const crateMover = ([stacksData, procedures]: string[][], canMoveMultiple = false): string => {
  const stackNumbers = stacksData.pop()?.trim() || "";
  const totalStacks = parseInt(stackNumbers.charAt(stackNumbers.length - 1), 10);
  const stacks: string[][] = Array.from({ length: totalStacks }, () => []);

  stacksData.forEach((line) => {
    for (let i = 0; i < totalStacks; i++) {
      const pointer = i * 4 + 1;
      if (line[pointer] && line[pointer].trim()) stacks[i].push(line[pointer]);
    }
  });

  procedures.forEach((procedure) => {
    const [amount, from, to] = (procedure.match(/\d+/g) || []).map(Number);
    const splice = stacks[from - 1].splice(0, amount);
    stacks[to - 1].unshift(...(canMoveMultiple ? splice : splice.reverse()));
  });

  return stacks.reduce((arrangement, crates) => (arrangement += crates.shift()), "");
};

export const part1 = (input: string[][]): string => crateMover(input);
export const part2 = (input: string[][]): string => crateMover(input, true);
