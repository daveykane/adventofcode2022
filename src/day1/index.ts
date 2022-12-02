const getTotals = (calories: number[][]) => calories.map((elf) => elf.reduce((total, item) => total + item, 0));

export const part1 = (calories: number[][]) => Math.max(...getTotals(calories));

export const part2 = (calories: number[][]) => {
  const totals = getTotals(calories).sort((a, b) => b - a);
  return totals.slice(0, 3).reduce((total, value) => total + value, 0);
};
