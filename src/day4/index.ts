const isContained = ([from1, to1]: number[], [from2, to2]: number[]) => from1 >= from2 && to1 <= to2;
const overlaps = ([from1, to1]: number[], [from2, to2]: number[]) => {
  return (from1 >= from2 && from1 <= to2) || (to1 >= from2 && to1 <= to2);
};

export const part1 = (assignments: number[][][]): number =>
  assignments.reduce((total, [elf1, elf2]) => {
    return isContained(elf1, elf2) || isContained(elf2, elf1) ? total + 1 : total;
  }, 0);

export const part2 = (assignments: number[][][]): number =>
  assignments.reduce((total, [elf1, elf2]) => {
    return overlaps(elf1, elf2) || overlaps(elf2, elf1) ? total + 1 : total;
  }, 0);
