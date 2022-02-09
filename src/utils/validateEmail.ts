export function validateEmail(input: string): boolean {
  const emailRegEx = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i;

  return emailRegEx.test(input);
}
