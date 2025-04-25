import {
  getCharactersCount,
  getWordCount,
  getSentenceCount,
} from "./textStats";

describe("getCharactersCount", () => {
  test("should count the caracters in a sentence", () => {
    const text = "This sentence has 32 characters.";
    const excludeSpaces = false;
    const count = getCharactersCount(text, excludeSpaces);
    expect(count).toBe(32);
  });

  test("should count the caracters in a sentence without the spaces", () => {
    const text = "This sentence has 32 characters.";
    const excludeSpaces = true;
    const spaces = 4;
    const count = getCharactersCount(text, excludeSpaces);
    expect(count).toBe(32 - spaces);
  });
});

describe("getWordCount", () => {
  test("should count the words in a sentence", () => {
    const text = "This sentence has 5 words.";
    const count = getWordCount(text);
    expect(count).toBe(5);
  });

  test("should return 0 for empty string", () => {
    const text = "";
    const count = getWordCount(text);
    expect(count).toBe(0);
  });

  test("should handle multiple spaces", () => {
    const text = "This sentence has   5    words.";
    const count = getWordCount(text);
    expect(count).toBe(5);
  });
});

describe("getWordCount", () => {
  test("should count the sentences with mixed punctuation in a text", () => {
    const text =
      "This is the third sentence. Is it? No, this is the third sentence!";
    const count = getSentenceCount(text);
    expect(count).toBe(3);
  });

  test("should return 0 if there are no sentence-ending punctuations", () => {
    const input = "Just some text without punctuation";
    expect(getSentenceCount(input)).toBe(0);
  });

  test("should return 0 for empty string", () => {
    expect(getSentenceCount("")).toBe(0);
  });

  test("should ignore excessive whitespace and newlines", () => {
    const input = "One sentence.   \n\nAnother one!\nA third?";
    expect(getSentenceCount(input)).toBe(3);
  });
});
