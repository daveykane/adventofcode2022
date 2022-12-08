import { Rhum } from "https://deno.land/x/rhum@v1.1.12/mod.ts";
import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";

const { assertEquals } = Rhum.asserts;

Rhum.testPlan("Advent of Code - Day Eight", () => {
  const example = ["30373", "25512", "65332", "33549", "35390"];
  const parseInput = (input: string[]): number[][] => input.map((trees) => trees.split("").map(Number));

  Rhum.testSuite("Part One", () => {
    Rhum.testCase("should get 21", () => {
      assertEquals(part1(parseInput(example)), 21);
    });

    Rhum.testCase("should get 1840", async () => {
      const input = (await getInput("day8")).split("\n");
      assertEquals(part1(parseInput(input)), 1840);
    });
  });

  Rhum.testSuite("Part Two", () => {
    Rhum.testCase("should get 8", () => {
      assertEquals(part2(parseInput(example)), 8);
    });

    Rhum.testCase("should get 405769", async () => {
      const input = (await getInput("day8")).split("\n");
      assertEquals(part2(parseInput(input)), 405769);
    });
  });
});

Rhum.run();
