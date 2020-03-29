"use strict";

module.exports = { testLerna, add, double };

function testLerna() {
  // TODO
  const randomString = Math.random() * 100 + 1;
  console.log("[info] you luck number is :", randomString);
}

function add(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return 0;
  }
}

function double(a) {
  if (!a) return 0;
  
  return a * 2;
}
