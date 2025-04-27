import { getLetterCount, getLetterPercentage, getUniqueLetters } from "./letterDensityUtils";

describe("getUniqueLetters", () => {

    test("should return unique uppercase letters from text", () => {
        const text = "ABCabc";
        const array = getUniqueLetters(text);
        expect(array).toStrictEqual(["A","B","C"])
    });

    test("should ignore whitespaces when extracting letters", () => {
        const text = "ABC abc";
        const array = getUniqueLetters(text);
        expect(array).toStrictEqual(["A","B","C"])
        expect(array).not.toStrictEqual(["A","B","C", " "])
    });

    test("should include non-alphabetic characters as unique items", () => {
        const text = "ABC.abc!";
        const array = getUniqueLetters(text);
        expect(array).toStrictEqual(["A","B","C",".","!"])
    });

    test("should return empty array for empty input", () => {
        const text = "";
        const array = getUniqueLetters(text);
        expect(array).toStrictEqual([]);
    });

});


describe("getLetterCount", () => {

    test("should count how often a specific character occurs in a text", () => {
        const text = "ABC. abca";
        const letter = "A";
        const total = getLetterCount(text, letter);
        expect(total).toStrictEqual(3);
    });

    test("should be case insensitive when counting characters", () => {
        const text = "ABC. abca";
        const letter = "a";
        const total = getLetterCount(text, letter);
        expect(total).toStrictEqual(3);
    });

    test("should count non-alphabetic characters correctly", () => {
        const text = "ABC. abca";
        const letter = ".";
        const total = getLetterCount(text, letter);
        expect(total).toStrictEqual(1);
    });

    test("should return 0 if the character is not present in text", () => {
        const text = "ABC. abca";
        const letter = "Z";
        const total = getLetterCount(text, letter);
        expect(total).toStrictEqual(0);
    });
});


describe("getLetterPercentage", () => {

    test("should calculate percentage of a specific character", () => {
        const text = "ABCD";
        const letter = "B";
        const percentage = getLetterPercentage(text, letter);
        expect(percentage).toStrictEqual(25.00)
    });

    test("should ignore whitespaces in calculation", () => {
        const text = "A B C D";
        const letter = "B";
        const percentage = getLetterPercentage(text, letter);
        expect(percentage).toStrictEqual(25.00)
    });

    test("should handle non-alphabetic characters", () => {
        const text = "A b . !";
        const letter = "B";
        const percentage = getLetterPercentage(text, letter);
        expect(percentage).toStrictEqual(25.00)
    });

    test("should be case insensitive", () => {
        const text = "A b . !";
        const letter = "b";
        const percentage = getLetterPercentage(text, letter);
        expect(percentage).toStrictEqual(25.00)
    });

})

