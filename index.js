// JavaScript Problem and Solutions

// Problem: Write a function that returns the sum of two numbers.
// Example 1:
// Input: a = 5, b = 3
// Output: 8
// Explanation: Adding 5 and 3 gives 8.
// Example 2:
// Input: a = -10, b = 4
// Output: -6
// Explanation: Adding -10 and 4 gives -6.
// Solution:
function add(a, b) {
  return a + b;
}
// Explanation: Simple function that takes two parameters and returns their sum using the + operator.

// Problem: Two Sum — Given an array of integers nums and an integer target,
// return indices of the two numbers that add up to target.
// You may assume exactly one solution, and may not use the same element twice.
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: nums[0] + nums[1] = 2 + 7 = 9.
// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Explanation: nums[1] + nums[2] = 2 + 4 = 6.
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
// Example 1:
// Input: s = "hello"
// Output: "olleh"
// Explanation: Each character is reversed from end to start.
// Example 2:
// Input: s = "a"
// Output: "a"
// Explanation: Single character remains unchanged.
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
// Example 1:
// Input: n = 5
// Output: 120
// Explanation: 5! = 5 × 4 × 3 × 2 × 1 = 120.
// Example 2:
// Input: n = 0
// Output: 1
// Explanation: By definition, 0! = 1.
// Solution:
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
// Explanation: Recursive approach where factorial(n) = n * factorial(n-1) with base case 0! = 1! = 1.



// Problem: FizzBuzz - Given an integer n, return an array of strings from 1 to n where multiples of 3 are replaced by "Fizz", multiples of 5 by "Buzz", and multiples of both 3 and 5 by "FizzBuzz".
// Example 1:
// Input: n = 3
// Output: ["1", "2", "Fizz"]
// Example 2:
// Input: n = 5
// Output: ["1", "2", "Fizz", "4", "Buzz"]
// Example 3:
// Input: n = 15
// Output: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]
// Solution:
function fizzBuzz(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }
  return result;
}
// Explanation: Loop from 1 to n. For each number, check divisibility by 3 and 5. If divisible by both, add "FizzBuzz"; else if by 3, add "Fizz"; else if by 5, add "Buzz"; else add the number as a string. Time complexity O(n), space complexity O(n) for the output array.

// Problem: Valid Parentheses - Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.
// 3. Every close bracket has a corresponding open bracket of the same type.
// Example 1:
// Input: s = "()"
// Output: true
// Example 2:
// Input: s = "()[]{}"
// Output: true
// Example 3:
// Input: s = "(]"
// Output: false
// Solution:
function isValid(s) {
  const stack = [];
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  for (let char of s) {
    if (map[char]) {
      // If it's a closing bracket
      const topElement = stack.length === 0 ? '#' : stack.pop();
      if (map[char] !== topElement) {
        return false;
      }
    } else {
      // If it's an opening bracket, push to stack
      stack.push(char);
    }
  }
  return stack.length === 0;
}
// Explanation: We use a stack to keep track of opening brackets. When we encounter a closing bracket, we check if the top of the stack is the matching opening bracket. If not, return false. At the end, the stack should be empty if all opening brackets were properly closed. Time complexity O(n), space complexity O(n) in the worst case.