import { Rhum } from "https://deno.land/x/rhum@v1.1.12/mod.ts";
import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";

const { assertEquals } = Rhum.asserts;

Rhum.testPlan("Advent of Code - Day Four", () => {
  const example = ["2-4,6-8", " 2-3,4-5", " 5-7,7-9", " 2-8,3-7", "6-6,4-6", "2-6,4-8"];
  const parseInput = (input: string[]): number[][][] =>
    input.map((pairs) => pairs.split(",").map((sections) => sections.split("-").map(Number)));

  Rhum.testSuite("Part One", () => {
    Rhum.testCase("should get 2", () => {
      assertEquals(part1(parseInput(example)), 2);
    });

    Rhum.testCase("should get 567", async () => {
      const input = (await getInput("day4")).split("\n");
      assertEquals(part1(parseInput(input)), 567);
    });
  });

  Rhum.testSuite("Part Two", () => {
    Rhum.testCase("should get 4", () => {
      assertEquals(part2(parseInput(example)), 4);
    });

    Rhum.testCase("should get 907", async () => {
      const input = (await getInput("day4")).split("\n");
      assertEquals(part2(parseInput(input)), 907);
    });
  });
});

Rhum.run();
