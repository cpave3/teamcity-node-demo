const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("expected to fail", () => {
  expect(sum(1, 2)).toBe(4);
});
