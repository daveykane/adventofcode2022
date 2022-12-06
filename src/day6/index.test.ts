import { Rhum } from "https://deno.land/x/rhum@v1.1.12/mod.ts";
import { part1, part2 } from "./index.ts";
import { getInput } from "../utils/index.ts";

const { assertEquals } = Rhum.asserts;

Rhum.testPlan("Advent of Code - Day Six", () => {
  Rhum.testSuite("Part One", () => {
    Rhum.testCase("should get 7", () => {
      assertEquals(part1("mjqjpqmgbljsphdztnvjfqwrcgsmlb"), 7);
    });

    Rhum.testCase("should get 5", () => {
      assertEquals(part1("bvwbjplbgvbhsrlpgdmjqwftvncz"), 5);
    });

    Rhum.testCase("should get 6", () => {
      assertEquals(part1("nppdvjthqldpwncqszvftbrmjlhg"), 6);
    });

    Rhum.testCase("should get 10", () => {
      assertEquals(part1("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg"), 10);
    });

    Rhum.testCase("should get 11", () => {
      assertEquals(part1("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw"), 11);
    });

    Rhum.testCase("should get 1080", async () => {
      assertEquals(part1(await getInput("day6")), 1080);
    });
  });

  Rhum.testSuite("Part Two", () => {
    Rhum.testCase("should get 7", () => {
      assertEquals(part2("mjqjpqmgbljsphdztnvjfqwrcgsmlb"), 19);
    });

    Rhum.testCase("should get 5", () => {
      assertEquals(part2("bvwbjplbgvbhsrlpgdmjqwftvncz"), 23);
    });

    Rhum.testCase("should get 6", () => {
      assertEquals(part2("nppdvjthqldpwncqszvftbrmjlhg"), 23);
    });

    Rhum.testCase("should get 10", () => {
      assertEquals(part2("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg"), 29);
    });

    Rhum.testCase("should get 11", () => {
      assertEquals(part2("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw"), 26);
    });

    Rhum.testCase("should get 3645", async () => {
      assertEquals(part2(await getInput("day6")), 3645);
    });
  });
});

Rhum.run();
