// JavaScript Problem and Solutions

// Problem: Write a function that returns the sum of two numbers.
// Solution:
function add(a, b) {
  return a + b;
}
// Explanation: Simple function that takes two parameters and returns their sum using the + operator.

// Problem: Two Sum — Given an array of integers nums and an integer target,
// return indices of the two numbers that add up to target.
// You may assume exactly one solution, and may not use the same element twice.
// Solution (O(n) using hash map):
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}
// Explanation: Uses a hash map to store each number's index as we iterate. For each number, we check if its complement (target - current number) exists in the map. If found, we return the indices. This gives O(n) time complexity.

// Problem: Reverse a string in-place.
// Solution:
function reverseString(s) {
  let left = 0, right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  return s;
}
// Explanation: Two-pointer approach where left starts at beginning and right at end. Swap characters at these positions and move pointers toward center until they meet. Note: In JavaScript, strings are immutable, so this actually works on an array of characters if passed as such, or creates a new string if s is a string primitive.

// Problem: Write a function that returns the factorial of a non-negative integer n.
// Solution:
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
// Explanation: Recursive approach where factorial(n) = n * factorial(n-1) with base case 0! = 1! = 1.