"use strict";

module.exports = { testLerna, add };

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
