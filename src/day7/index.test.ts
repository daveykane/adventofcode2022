import { Rhum } from "https://deno.land/x/rhum@v1.1.12/mod.ts";
import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";

const { assertEquals } = Rhum.asserts;

Rhum.testPlan("Advent of Code - Day Seven", () => {
  Rhum.testSuite("Part One", () => {
    Rhum.testCase("should get 95437", async () => {
      assertEquals(part1(await getInput("day7", "input-example")), 95437);
    });

    Rhum.testCase("should get 1642503", async () => {
      assertEquals(part1(await getInput("day7")), 1642503);
    });
  });

  Rhum.testSuite("Part Two", () => {
    Rhum.testCase("should get 24933642", async () => {
      assertEquals(part2(await getInput("day7", "input-example")), 24933642);
    });

    Rhum.testCase("should get 6999588", async () => {
      assertEquals(part2(await getInput("day7")), 6999588);
    });
  });
});

Rhum.run();
