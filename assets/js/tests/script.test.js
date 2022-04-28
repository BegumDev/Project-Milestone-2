/**
 * @jest-environment jsdom
 */

let wordArray;

beforeAll(() => {
	let fs = require("fs");
	let fileContents = fs.readFileSync("index.html", "utf-8");
	document.open();
	document.write(fileContents);
	document.close();
	
	wordArray = require("../script.js");
});

// This test brings in from the DOM regardless of importing in modules
describe("DOM elements exist", () => {
  test("score should exist", () => {
    expect(document.getElementById("score").innerHTML).toEqual("Score: 0");
  });
});

// This test checks the number of words in my word list
describe("How many words there are in the words list", () => {
  test("wordArray should include 30 words", () => {
    // expect(wordArray).toHaveLength(30);
	expect(wordArray).toHaveLength(30);
  });
});

// This test checks if specific words are included within the word list
describe("Content inside the words array", () => {
  test("wordArray should include certain words", () => {
    expect(wordArray).toContain('Innovate');
  });
});
