import { Rhum } from "https://deno.land/x/rhum@v1.1.12/mod.ts";
import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";

const { assertEquals } = Rhum.asserts;

Rhum.testPlan("Advent of Code - Day Twp", () => {
  const example = [
    ["A", "Y"],
    ["B", "X"],
    ["C", "Z"],
  ];

  Rhum.testSuite("Part One", () => {
    Rhum.testCase("should get 15", () => {
      assertEquals(part1(example), 15);
    });
    Rhum.testCase("should get 10816", async () => {
      const input = (await getInput("day2")).split("\n").map((round) => round.split(" "));
      assertEquals(part1(input), 10816);
    });
  });

  Rhum.testSuite("Part Two", () => {
    Rhum.testCase("should get 12", () => {
      assertEquals(part2(example), 12);
    });

    Rhum.testCase("should get 11657", async () => {
      const input = (await getInput("day2")).split("\n").map((round) => round.split(" "));
      assertEquals(part2(input), 11657);
    });
  });
});

Rhum.run();
