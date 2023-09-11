export function upperCaseFirst(string: string) {
  const str = string.toLowerCase();
  return str.toLowerCase().charAt(0).toUpperCase() + str.slice(1);
}
