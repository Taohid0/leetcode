/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase();
  let text = "";
  let reverseText = "";
  for (const char of s) {
    if (
      ("a" <= char && char <= "z") ||
      ("A" <= char && char <= "Z") ||
      ("0" <= char && char <= "9")
    ) {
      text = text + char;
      reverseText = char + reverseText;
    }
  }

  return text === reverseText;
};
