const split = (string: string, index: number) => [string.slice(0, index), string.slice(index)];
const getPriority = (char: string): number => char.charCodeAt(0) - (/[a-z]/.test(char) ? 96 : 38);

const chunk = (rucksacks: string[], size: number) => {
  const length = Math.ceil(rucksacks.length / size);
  return Array.from({ length }, (_v, i) => rucksacks.slice(i * size, i * size + size));
};

export const part1 = (rucksacks: string[]): number => {
  return rucksacks.reduce((total, rucksack) => {
    const [first, second] = split(rucksack, rucksack.length / 2).map((types) => types.split(""));
    const [item] = [...new Set(first.filter((type) => second.includes(type)))];
    return total + getPriority(item);
  }, 0);
};

export const part2 = (rucksacks: string[]): number => {
  return chunk(rucksacks, 3).reduce((total, group) => {
    const types = group.map((rucksack) => rucksack.split(""));
    const [item] = [...new Set(types.reduce((a, b) => a.filter((c) => b.includes(c))))];
    return total + getPriority(item);
  }, 0);
};
