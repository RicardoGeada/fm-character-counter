/**
 * Returns an array of unique characters from a given text.
 * - Ignores whitespaces
 * - Converts all letters to uppercase
 * 
 * @param {string} text - The input text
 * @returns {string[]} Array of unique uppercase characters
 */
export function getUniqueLetters(text: string): string[] {
  const array = text.replace(/\s+/g, "").toUpperCase().split("");
  const set = [...new Set(array)];
  return set;
}


/**
 * Counts how often a specific character occurs in a text.
 * 
 * @param {string} text - The text to search in
 * @param {string} letter - The letter to count
 * @returns {number} Total number of occurrences
 */
export function getLetterCount(text:string, letter:string) : number {
  const regex = new RegExp(`[${letter.toUpperCase()}${letter.toLowerCase()}]`, 'g');
  const total = text.match(regex)?.length || 0;
  return total;
}


/**
 * Calculates the percentage a specific character appears in the text.
 * 
 * @param {string} text - The full input text
 * @param {string} letter - The letter to calculate the percentage for
 * @returns {number} Percentage of occurrences relative to total characters
 */
export function getLetterPercentage(text:string, letter:string) {
  const total = getLetterCount(text, letter);
  if (total > 0) return parseFloat(((total / text.replace(/\s+/g, "").length) * 100).toFixed(2));
  else return 0;
}