const findMarker = (buffer: string, length: number): number | undefined => {
  for (let i = length - 1; i < buffer.length; i++) {
    if ([...new Set(buffer.substring(i, i - length).split(""))].length === length) {
      return i;
    }
  }
};

export const part1 = (buffer: string): number | undefined => findMarker(buffer, 4);
export const part2 = (buffer: string): number | undefined => findMarker(buffer, 14);
