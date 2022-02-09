export function isDateString(input: string): boolean {
  const dateRegEx = /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/;
  return dateRegEx.test(input);
}
