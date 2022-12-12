import { Rhum } from "https://deno.land/x/rhum@v1.1.12/mod.ts";
import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";

const { assertEquals } = Rhum.asserts;

Rhum.testPlan("Advent of Code - Day Ten", () => {
  Rhum.testSuite("Part One", () => {
    Rhum.testCase("should get 13140", async () => {
      const example = (await getInput("day10", "input-example")).split("\n");
      assertEquals(part1(example), 13140);
    });

    Rhum.testCase("should get 15020", async () => {
      const input = (await getInput("day10")).split("\n");
      assertEquals(part1(input), 15020);
    });
  });

  Rhum.testSuite("Part Two", () => {
    Rhum.testCase("should get example display", async () => {
      const example = (await getInput("day10", "input-example")).split("\n");
      assertEquals(
        part2(example),
        [
          "##..##..##..##..##..##..##..##..##..##..",
          "###...###...###...###...###...###...###.",
          "####....####....####....####....####....",
          "#####.....#####.....#####.....#####.....",
          "######......######......######......####",
          "#######.......#######.......#######.....",
        ].join("\n")
      );
    });

    Rhum.testCase("should get input display", async () => {
      const input = (await getInput("day10")).split("\n");
      assertEquals(
        part2(input),
        [
          "####.####.#..#..##..#....###...##..###..",
          "#....#....#..#.#..#.#....#..#.#..#.#..#.",
          "###..###..#..#.#....#....#..#.#..#.#..#.",
          "#....#....#..#.#.##.#....###..####.###..",
          "#....#....#..#.#..#.#....#....#..#.#....",
          "####.#.....##...###.####.#....#..#.#....",
        ].join("\n")
      );
    });
  });
});

Rhum.run();
