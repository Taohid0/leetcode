/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let result = -1;
  for (let i = 0; i < haystack.length; i++) {
    const substring = haystack.substring(i, i + needle.length);
    if (substring === needle) {
      result = i;
      break;
    }
  }

  return result;
};
