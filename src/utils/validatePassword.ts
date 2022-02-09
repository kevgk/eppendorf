const MIN_LENGTH = 8;
const MIN_UPPERCASE_CHARS = 1;
const MIN_SPECIAL_CHARS = 1;
const MIN_NUM_CHARS = 1;

function getUpperCaseChars(input: string): string[] {
  const regex = /[A-Z]/;
  return input.split("").filter((char) => regex.test(char));
}

function getSpecialChars(input: string): string[] {
  const specialChars = ["!", '"', "§", "$", "%", "&", "/", "(", ")", "=", "?"];
  return input.split("").filter((char) => specialChars.includes(char));
}

function getNumChars(input: string): string[] {
  const regex = /[0-9]/;
  return input.split("").filter((char) => regex.test(char));
}

export function validatePassword(input: string): boolean {
  const requirements = [
    input.length >= MIN_LENGTH,
    getUpperCaseChars(input).length >= MIN_UPPERCASE_CHARS,
    getSpecialChars(input).length >= MIN_SPECIAL_CHARS,
    getNumChars(input).length >= MIN_NUM_CHARS,
  ];

  return requirements.every((req) => !!req);
}
