const analyzeArray = require("./analyzeArray");
const numbers = [1, 8, 3, 4, 2, 6];

test("finds average, min, max, length of array", () => {
  expect(analyzeArray(numbers)).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
