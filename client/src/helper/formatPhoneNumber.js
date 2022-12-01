export function formatPhoneNumber(number) {
    const numberString = number.toString();
    const areaCode = numberString.substring(2, 5);
    const sectionOne = numberString.substring(5, 8);
    const sectionTwo = numberString.substring(8, 11);

    return `(${areaCode}) ${sectionOne}-${sectionTwo}`
}