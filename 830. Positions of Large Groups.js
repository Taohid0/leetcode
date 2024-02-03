/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  const result = [];
  let currentLength = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      currentLength++;
    } else {
      if (currentLength >= 3) {
        result.push([i - currentLength + 1, i]);
      }
      currentLength = 1;
    }
  }

  return result;
};
