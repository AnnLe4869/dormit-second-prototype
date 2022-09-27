export function convertToCamelCase(string) {
  const newString = string
    .toLowerCase()
    .replace(/[^\w]+(.)/g, (ltr) => ltr.toUpperCase())
    .replace(/[^a-zA-Z]/g, "");
  return newString;
}
