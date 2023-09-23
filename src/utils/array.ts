export function convertKeyValue(
  arr: any[],
  fieldKey: string,
  fieldValue: string,
  keyName: string,
  valueName: string,
) {
  return arr.map(obj => ({
    [keyName]: obj[fieldKey],
    [valueName]: obj[fieldValue],
    ...obj,
  }));
}
