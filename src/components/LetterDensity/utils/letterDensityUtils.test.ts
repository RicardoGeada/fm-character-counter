import { getUniqueLetters } from "./letterDensityUtils";

describe("getUniqueLetters", () => {

    test("should return unique uppercase letters from text", () => {
        const text = "ABCabc";
        const array = getUniqueLetters(text);
        expect(array).toStrictEqual(["A","B","C"])
    })

    test("should ignore whitespaces when extracting letters", () => {
        const text = "ABC abc";
        const array = getUniqueLetters(text);
        expect(array).toStrictEqual(["A","B","C"])
        expect(array).not.toStrictEqual(["A","B","C", " "])
    })

    test("should include non-alphabetic characters as unique items", () => {
        const text = "ABC.abc!";
        const array = getUniqueLetters(text);
        expect(array).toStrictEqual(["A","B","C",".","!"])
    })

    test("should return empty array for empty input", () => {
        const text = "";
        const array = getUniqueLetters(text);
        expect(array).toStrictEqual([]);
      })

}) 

