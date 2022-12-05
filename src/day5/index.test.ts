import { Rhum } from "https://deno.land/x/rhum@v1.1.12/mod.ts";
import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";

const { assertEquals } = Rhum.asserts;

Rhum.testPlan("Advent of Code - Day Five", () => {
  const parseInput = (input: string): string[][] => input.split("\n\n").map((drawing) => drawing.split("\n"));

  Rhum.testSuite("Part One", () => {
    Rhum.testCase("should get 'CMZ'", async () => {
      assertEquals(part1(parseInput(await getInput("day5", "input-example", false))), "CMZ");
    });

    Rhum.testCase("should get 'FRDSQRRCD'", async () => {
      assertEquals(part1(parseInput(await getInput("day5", "input", false))), "FRDSQRRCD");
    });
  });

  Rhum.testSuite("Part Two", () => {
    Rhum.testCase("should get 'MCD", async () => {
      assertEquals(part2(parseInput(await getInput("day5", "input-example", false))), "MCD");
    });

    Rhum.testCase("should get 'HRFTQVWNN'", async () => {
      assertEquals(part2(parseInput(await getInput("day5", "input", false))), "HRFTQVWNN");
    });
  });
});

Rhum.run();
