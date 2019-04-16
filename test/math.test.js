const math = require("../src/math");

test("adds 1 + 2 to equal 3", () => {
  expect(math.sum(1, 2)).toBe(3);
});

test("subtracts 2 - 1 to equal 1", () => {
  expect(math.subtract(2, 1)).toBe(1);
});
