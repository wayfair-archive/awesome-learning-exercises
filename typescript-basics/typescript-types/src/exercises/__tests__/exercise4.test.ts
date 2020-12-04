import { mash, NUMBER_TO_MASH, STRING_TO_MASH } from "../exercise4";

test("It can mash a number key with a string value", () => {
  const resultMap = new Map<number, string>();
  resultMap.set(10, "Hello");
  expect(mash<number, string>(NUMBER_TO_MASH, STRING_TO_MASH)).toMatchObject(
    resultMap
  );
});

test("It can mash a string key with a number value", () => {
  const resultMap = new Map<string, number>();
  resultMap.set("Hello", 10);
  expect(mash<string, number>(STRING_TO_MASH, NUMBER_TO_MASH)).toMatchObject(
    resultMap
  );
});
