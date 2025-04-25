/**
 * Counts the number of characters in a given text.
 * Optionally excludes spaces from the count.
 * 
 * @param {string} text - The input text to analyze.
 * @param {boolean} excludeSpaces - Whether to exclude spaces from the count.
 * @returns {number} The total number of characters.
 */
export function getCharactersCount(text: string, excludeSpaces: boolean): number {
    return excludeSpaces ? text.replace(/\s+/g, "").length : text.length; 
}

/**
 * Counts the number of words in a given text.
 * A word is defined as any sequence of non-space characters separated by whitespace.
 * 
 * @param {string} text - The input text to analyze.
 * @returns {number} The total number of words.
 */
export function getWordCount(text: string): number {
    return text.trim().split(/\s+/).filter(Boolean).length;
}

/**
 * Counts the number of sentences in a given text.
 * A sentence is identified by ending punctuation: ".", "!", or "?".
 * 
 * @param {string} text - The input text to analyze.
 * @returns {number} The total number of sentences.
 */
export function getSentenceCount(text: string): number {
    return text.match(/[^.!?]+[.!?]+/g)?.length || 0;
}



