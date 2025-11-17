
test("toString() converts array to comma separated string", () => {
  const myColor = ["Red", "Green", "White", "Black"];
  expect(myColor.toString()).toBe("Red,Green,White,Black");
});

test("join() without argument also uses comma", () => {
  const myColor = ["Red", "Green", "White", "Black"];
  expect(myColor.join()).toBe("Red,Green,White,Black");
});

test("join('') concatenates without separators", () => {
  const myColor = ["Red", "Green", "White", "Black"];
  expect(myColor.join('')).toBe("RedGreenWhiteBlack");
});
