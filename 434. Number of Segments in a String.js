/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  return s.split(" ").filter((text) => text).length;
};
