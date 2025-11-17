const chunk= require('./chunk');

test("Divide array into several sub-arrays of predefined size", () => {
  expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
});

test("last chunk contains remaining elements", () => {
  expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
});

test("returns an empty array when input is empty array", () => {
  expect(chunk([], 3)).toEqual([]);
});

test("size larger than array returns one chunk", () => {
  expect(chunk([1, 2, 3], 10)).toEqual([[1, 2, 3]]);
});