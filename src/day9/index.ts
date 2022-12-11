export const runMotions = (motions: string[], totalKnots: number): number => {
  const rope = Array.from({ length: totalKnots }, () => ({ x: 0, y: 0 }));
  const visited = new Set([Object.values(rope[rope.length - 1]).toString()]);

  return motions.reduce((_visits, motion) => {
    const [direction, steps] = motion.split(" ");

    for (let i = 0; i < +steps; i++) {
      if (direction === "U") rope[0].y = rope[0].y - 1;
      else if (direction === "D") rope[0].y = rope[0].y + 1;
      else if (direction === "L") rope[0].x = rope[0].x - 1;
      else if (direction === "R") rope[0].x = rope[0].x + 1;

      for (let j = 1; j < rope.length; j++) {
        const knot = rope[j];
        const prevKnot = rope[j - 1];

        if (Math.abs(prevKnot.x - knot.x) >= 2 || Math.abs(prevKnot.y - knot.y) >= 2) {
          knot.x += prevKnot.x === knot.x ? 0 : prevKnot.x > knot.x ? 1 : -1;
          knot.y += prevKnot.y === knot.y ? 0 : prevKnot.y > knot.y ? 1 : -1;
        }
      }

      visited.add(Object.values(rope[rope.length - 1]).toString());
    }

    return visited.size;
  }, 0);
};

export const part1 = (motions: string[]): number => runMotions(motions, 2);
export const part2 = (motions: string[]): number => runMotions(motions, 10);
