/**
 * @jest-environment jsdom
 */



const {restart} = require("../script3")

beforeAll(() => {
	let fs = require("fs");
	let fileContents = fs.readFileSync("index.html", "utf-8");
	document.open();
	document.write(fileContents);
	document.close();
});

describe("DOM tests", () => {
  test("score should exist", () => {
    expect(document.getElementById("score").innerHTML).toEqual("Score: 0");
  });
    // test("h1 should exist", () => {
    //   expect(document.getElementsByTagName("h1").length).toBe(1);
    // });
    // test("should add", () => {
    //   expect(1 + 2).toBe(3);
    // });
});

