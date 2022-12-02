const MOVE_SCORE: Record<string, number> = { X: 1, Y: 2, Z: 3 };
const MOVE_WIN: Record<string, string> = { X: "C", Y: "A", Z: "B" };
const MOVE_DRAW: Record<string, string> = { X: "A", Y: "B", Z: "C" };
const MOVE_LOSE: Record<string, string> = { X: "B", Y: "C", Z: "A" };

const getRoundScore = ([elf, me]: string[]) => {
  const outcome = elf === MOVE_DRAW[me] ? 3 : elf === MOVE_WIN[me] ? 6 : 0;
  return MOVE_SCORE[me] + outcome;
};

const findMove = (play: Record<string, string>, elf: string) => Object.keys(play).find((move) => play[move] === elf);

export const part1 = (strategy: string[][]) => strategy.reduce((total, round) => total + getRoundScore(round), 0);

export const part2 = (strategy: string[][]) => {
  return strategy.reduce((total, [elf, me]) => {
    const result = me === "X" ? MOVE_LOSE : me === "Y" ? MOVE_DRAW : MOVE_WIN;
    return total + getRoundScore([elf, findMove(result, elf) || ""]);
  }, 0);
};
