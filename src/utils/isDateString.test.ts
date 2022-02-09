import { isDateString } from "./isDateString";

describe("isDateString", () => {
  it("returns true when given a date", () => {
    const result = isDateString("01/20/2022");

    expect(result).toBe(true);
  });

  it("returns false when given something else than a date", () => {
    const result = isDateString("aa/bb/cccc");

    expect(result).toBe(false);
  });
});
