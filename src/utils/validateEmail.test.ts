import { validateEmail } from "./validateEmail";

describe("validateEmail", () => {
  it("returns true for valid email adress", () => {
    const result = validateEmail("test@example.de");
    expect(result).toBe(true);
  });

  it("returns false for invalid email adress", () => {
    const result = validateEmail("test@example");

    expect(result).toBe(false);
  });

  it("returns false for invalid email adress", () => {
    const result = validateEmail("@example.com");

    expect(result).toBe(false);
  });
});
