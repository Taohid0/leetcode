/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function (nums) {
  const isValidTriangle = (a, b, c) => {
    return a + b > c && a + c > b && b + c > a;
  };

  if (!isValidTriangle(...nums)) return "none";

  if (nums[0] === nums[1] && nums[1] === nums[2]) return "equilateral";
  if (nums[0] === nums[1] || nums[1] === nums[2] || nums[0] === nums[2])
    return "isosceles";
  return "scalene";
};
