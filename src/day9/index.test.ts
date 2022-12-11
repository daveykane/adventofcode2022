import { Rhum } from "https://deno.land/x/rhum@v1.1.12/mod.ts";
import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";

const { assertEquals } = Rhum.asserts;

Rhum.testPlan("Advent of Code - Day Nine", () => {
  const example = ["R 4", "U 4", "L 3", "D 1", "R 4", "D 1", "L 5", "R 2"];

  Rhum.testSuite("Part One", () => {
    Rhum.testCase("should get 13", () => {
      assertEquals(part1(example), 13);
    });

    Rhum.testCase("should get 6197", async () => {
      const input = (await getInput("day9")).split("\n");
      assertEquals(part1(input), 6197);
    });
  });

  Rhum.testSuite("Part Two", () => {
    const example2 = ["R 5", "U 8", "L 8", "D 3", "R 17", "D 10", "L 25", "U 20"];

    Rhum.testCase("should get 1", () => {
      assertEquals(part2(example), 1);
    });

    Rhum.testCase("should get 36", () => {
      assertEquals(part2(example2), 36);
    });

    Rhum.testCase("should get 2562", async () => {
      const input = (await getInput("day9")).split("\n");
      assertEquals(part2(input), 2562);
    });
  });
});

Rhum.run();
