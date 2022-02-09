import { validatePassword } from "./validatePassword";

describe("validatePassword", () => {
  it("return true for a valid password", () => {
    const valid = "dwaqfR$3";
    const result = validatePassword(valid);

    expect(result).toBe(true);
  });

  it("return false for an invalid password", () => {
    const valid = "dwaqf";
    const result = validatePassword(valid);

    expect(result).toBe(false);
  });
});
