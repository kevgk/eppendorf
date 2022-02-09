import { toggleOrderString } from "./toggleOrderString";

describe("toggleOrderString", () => {
  it("returns asc when called with desc", () => {
    const toggled = toggleOrderString("desc");
    expect(toggled).toBe("asc");
  });

  it("returns desc when called with asc", () => {
    const toggled = toggleOrderString("asc");
    expect(toggled).toBe("desc");
  });
});
