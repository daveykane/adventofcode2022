import { Rhum } from "https://deno.land/x/rhum@v1.1.12/mod.ts";
import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";

const { assertEquals } = Rhum.asserts;

Rhum.testPlan("Advent of Code - Day Three", () => {
  const example = [
    "vJrwpWtwJgWrhcsFMMfFFhFp",
    "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
    "PmmdzqPrVvPwwTWBwg",
    "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
    "ttgJtRGJQctTZtZT",
    "CrZsJsPPZsGzwwsLwLmpwMDw",
  ];

  Rhum.testSuite("Part One", () => {
    Rhum.testCase("should get 157", () => {
      assertEquals(part1(example), 157);
    });

    Rhum.testCase("should get 8493", async () => {
      const input = (await getInput("day3")).split("\n");
      assertEquals(part1(input), 8493);
    });
  });

  Rhum.testSuite("Part Two", () => {
    Rhum.testCase("should get 70", () => {
      assertEquals(part2(example), 70);
    });

    Rhum.testCase("should get 2552", async () => {
      const input = (await getInput("day3")).split("\n");
      assertEquals(part2(input), 2552);
    });
  });
});

Rhum.run();
