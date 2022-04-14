const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js');

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });
  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['F', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['R', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['A', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['N', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['K', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['L', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['I', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['N', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['D', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANKLIND');

    assert.isTrue(result);
  });
  it("should return false if there is no word", function() {
    const result = wordSearch([
      ['F', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['R', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['A', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['N', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['K', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['L', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['I', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['N', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['D', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANKLIND');

    assert.isFalse(result);
  });
});
