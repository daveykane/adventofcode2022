const isVisible = (trees: number[][], tree: number, fromY: number, toY: number, fromX: number, toX: number) => {
  for (let y = fromY; y <= toY; y++) {
    for (let x = fromX; x <= toX; x++) {
      if (trees[y][x] >= tree) {
        return false;
      }
    }
  }

  return true;
};

const getScenicScore = (trees: number[][], tree: number, y1: number, y2: number, x1: number, x2: number) => {
  let scenicScore = 0;

  const adjacentTrees: number[] = [];

  for (let y = y1; y <= y2; y++) {
    for (let x = x1; x <= x2; x++) {
      adjacentTrees.push(trees[y][x]);
    }
  }

  y1 === 0 || x1 === 0 ? adjacentTrees.reverse() : adjacentTrees;

  for (let i = 0; i < adjacentTrees.length; i++) {
    scenicScore++;
    if (adjacentTrees[i] >= tree) return scenicScore;
  }

  return scenicScore;
};

export const part1 = (trees: number[][]): number => {
  let visibleTrees = trees.length + trees[0].length;

  for (let y = 1; y < trees.length - 1; y++) {
    visibleTrees += 2;
    const row = trees[y];

    for (let x = 1; x < row.length - 1; x++) {
      const tree = trees[y][x];

      if (
        isVisible(trees, tree, y, y, 0, x - 1) ||
        isVisible(trees, tree, y, y, x + 1, row.length - 1) ||
        isVisible(trees, tree, 0, y - 1, x, x) ||
        isVisible(trees, tree, y + 1, trees.length - 1, x, x)
      ) {
        visibleTrees++;
      }
    }
  }

  return visibleTrees;
};

export const part2 = (trees: number[][]): number => {
  let highestScore = 0;

  for (let y = 1; y < trees.length - 1; y++) {
    const row = trees[y];

    for (let x = 1; x < row.length - 1; x++) {
      const tree = trees[y][x];
      const scenicScore =
        getScenicScore(trees, tree, y, y, 0, x - 1) *
        getScenicScore(trees, tree, y, y, x + 1, row.length - 1) *
        getScenicScore(trees, tree, 0, y - 1, x, x) *
        getScenicScore(trees, tree, y + 1, trees.length - 1, x, x);

      if (scenicScore > highestScore) {
        highestScore = scenicScore;
      }
    }
  }

  return highestScore;
};
