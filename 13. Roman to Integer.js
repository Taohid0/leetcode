/**
 * @param {string} s
 * @return {number}
 */

const numberMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
var romanToInt = function (s) {
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    if (numberMap[s[i]] < numberMap[s[i + 1]]) {
      total -= numberMap[s[i]];
    } else {
      total += numberMap[s[i]];
    }
  }
  return total;
};
