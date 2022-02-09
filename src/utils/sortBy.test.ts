import { sortBy, compareAsc, compareDesc } from "./sortBy";

describe("compareAsc", () => {
  it("returns 1 when the first value is greater", () => {
    const result = compareAsc(64, 35);

    expect(result).toBe(1);
  });

  it("returns -1 when the first value is smaller", () => {
    const result = compareAsc(18, 54);

    expect(result).toBe(-1);
  });
});

describe("compareDesc", () => {
  it("returns 1 when the first value is smaller", () => {
    const result = compareDesc(18, 54);

    expect(result).toBe(1);
  });

  it("returns -1 when the first value is greater", () => {
    const result = compareDesc(54, 18);

    expect(result).toBe(-1);
  });
});

describe("sortBy", () => {
  it("sorts an array by a given key (number) in ascending order", () => {
    const unsorted = [{ id: 3 }, { id: 1 }, { id: 2 }];

    const sorted = sortBy(unsorted, "id", "asc");

    expect(sorted).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });

  it("sorts an array by a given key (number) in descending order", () => {
    const unsorted = [{ id: 3 }, { id: 1 }, { id: 2 }];

    const sorted = sortBy(unsorted, "id", "desc");

    expect(sorted).toEqual([{ id: 3 }, { id: 2 }, { id: 1 }]);
  });

  it("sorts an array by a given key (string) in ascending order", () => {
    const unsorted = [
      { letter: "c" },
      { letter: "a" },
      { letter: "a" },
      { letter: "b" },
    ];

    const sorted = sortBy(unsorted, "letter", "asc");

    expect(sorted).toEqual([
      { letter: "a" },
      { letter: "a" },
      { letter: "b" },
      { letter: "c" },
    ]);
  });

  it("sorts an array by a given key (string) in descending order", () => {
    const unsorted = [{ letter: "c" }, { letter: "a" }, { letter: "b" }];

    const sorted = sortBy(unsorted, "letter", "desc");

    expect(sorted).toEqual([{ letter: "c" }, { letter: "b" }, { letter: "a" }]);
  });

  it("sorts an array by a given key with date strings in descending order", () => {
    const unsorted = [
      { date: "12/30/2019" },
      { date: "12/15/2019" },
      { date: "12/17/2021" },
    ];

    const sorted = sortBy(unsorted, "date", "desc");

    expect(sorted).toEqual([
      { date: "12/17/2021" },
      { date: "12/30/2019" },
      { date: "12/15/2019" },
    ]);
  });

  it("sorts an array by a given key with date strings in ascending order", () => {
    const unsorted = [
      { date: "12/30/2019" },
      { date: "12/17/2021" },
      { date: "12/15/2019" },
    ];

    const sorted = sortBy(unsorted, "date", "asc");

    expect(sorted).toEqual([
      { date: "12/15/2019" },
      { date: "12/30/2019" },
      { date: "12/17/2021" },
    ]);
  });
});
