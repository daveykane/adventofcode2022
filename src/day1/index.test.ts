import { Rhum } from "https://deno.land/x/rhum@v1.1.12/mod.ts";
import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";

const { assertEquals } = Rhum.asserts;

Rhum.testPlan("Advent of Code - Day One", () => {
  const example = [[1000, 2000, 3000], [4000], [5000, 6000], [7000, 8000, 9000], [10000]];

  Rhum.testSuite("Part One", () => {
    Rhum.testCase("should get 24000", () => {
      assertEquals(part1(example), 24000);
    });

    Rhum.testCase("should get 71934", async () => {
      const input = (await getInput("day1")).split("\n\n").map((elf) => elf.split("\n").map(Number));
      assertEquals(part1(input), 71934);
    });
  });

  Rhum.testSuite("Part Two", () => {
    Rhum.testCase("should get 45000", () => {
      assertEquals(part2(example), 45000);
    });

    Rhum.testCase("should get 211447", async () => {
      const input = (await getInput("day1")).split("\n\n").map((elf) => elf.split("\n").map(Number));
      assertEquals(part2(input), 211447);
    });
  });
});

Rhum.run();
