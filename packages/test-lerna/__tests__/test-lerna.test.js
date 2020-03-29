"use strict";

const { add } = require("..");

describe("@bethon/test-lerna", () => {
  it("simple add test, when given 1 and 2, got 3", () => {
    expect(add(1, 2)).toBe(3);
  });

  it("when given 0 and 2, got 2", () => {
    expect(add(0, 2)).toBe(2);
  });
});
