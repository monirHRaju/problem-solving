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

// Problem: Palindrome Check - Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Solution:
function isPalindrome(s) {
  const alphanumericOnly = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0;
  let right = alphanumericOnly.length - 1;
  while (left < right) {
    if (alphanumericOnly[left] !== alphanumericOnly[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
// Explanation: First, convert string to lowercase and remove non-alphanumeric characters. Then use two-pointer technique: left starts at beginning, right at end. Compare characters moving inward; if any mismatch, return false. If all match, return true. Time complexity O(n), space complexity O(n) for the filtered string (could be O(1) if we check characters on the fly but we keep simple).




// Problem: Merge Sorted Arrays - Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array. The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.
// Example 1:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The merged array is [1,2,2,3,5,6].
// Solution:
function merge(nums1, m, nums2, n) {
  let i = m - 1; // Pointer for nums1's actual elements
  let j = n - 1; // Pointer for nums2
  let k = m + n - 1; // Pointer for the end of nums1

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
}
// Explanation: We start from the end of both arrays and compare elements, placing the larger one at the end of nums1. This avoids overwriting elements in nums1 that haven't been processed yet. Time complexity O(m+n), space complexity O(1).
// Problem: Contains Duplicate - Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Example 1:
// Input: nums = [1,2,3,1]
// Output: true
// Example 2:
// Input: nums = [1,2,3,4]
// Output: false
// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
// Solution:
function containsDuplicate(nums) {
  const seen = new Set();
  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}
// Explanation: We use a Set to store numbers we have seen. For each number, if it already exists in the set, we have found a duplicate and return true. Otherwise, we add the number to the set. If we finish the loop without finding duplicates, return false. This runs in O(n) time and O(n) space.

// Problem: Check Good Integer
// Example 1:
// Input: n = 1000
// Output: false
// Explanation: The digits of 1000 are 1, 0, 0, and 0. The digitSum is 1. The squareSum is 1. The squareSum - digitSum is 0, which is less than 50, so output is false.
// Example 2:
// Input: n = 19
// Output: true
// Explanation: The digits of 19 are 1 and 9. The digitSum is 10. The squareSum is 82. The squareSum - digitSum is 72, which is >=50, so output is true.
// Solution:
function checkGoodInteger(n) {
  let digitSum = 0;
  let squareSum = 0;
  while (n > 0) {
    const digit = n % 10;
    digitSum += digit;
    squareSum += digit * digit;
    n = Math.floor(n / 10);
  }
  return (squareSum - digitSum) >= 50;
}
// Explanation: We compute the sum of digits (digitSum) and the sum of squares of digits (squareSum) by iterating through each digit of n. Then we check if squareSum - digitSum is at least 50.

// Problem: Digit Frequency Score - Given an integer n, return the sum of its digits.
// Example 1:
//   // Input: n = 122
//   // Output: 5
//   // Explanation: 1 + 2 + 2 = 5.
// Example 2:
//   // Input: n = 101
//   // Output: 2
//   // Explanation: 1 + 0 + 1 = 2.
//   // Solution:
//   function digitFrequencyScore(n) {
//       let sum = 0;
//       const s = String(Math.abs(n)); // handle negative numbers
//       for (const ch of s) {
//           sum += parseInt(ch, 10);
//       }
//       return sum;
//   }
//   // Explanation: We convert the absolute value of the number to a string to handle negative numbers, then iterate over each character, convert it to a digit, and accumulate the sum. This runs in O(d) time where d is the number of digits.
// 
// Problem: Frequency Balance Subarray (LeetCode #4322 - Medium)
// Link: https://leetcode.com/problems/frequency-balance-subarray/
// Description: You are given an integer array ​​​​​​​ nums . 

 Define a  frequency balance  subarray   as follows: 

 
	 If the subarray contains only one distinct value, it is frequency balanced. 
	 Otherwise, there must exist a positive integer  f  such that every distinct value in the subarray occurs either  f  or  2 * f  times, and both  frequencies  occur among the distinct values. 
 

 Return an integer denoting the length of the  longest  frequency balance subarray. 

 &nbsp; 
  Example 1:  

 
  Input...

// Example 1:
// Input: ...
// Output: ...
// 
// Solution:

function longestFrequencyBalanceSubarray(nums) {
    let n = nums.length;
    if (n === 0) return 0;
    let maxLen = 0;
    for (let i = 0; i < n; i++) {
        const freq = new Map(); // value -> count
        const countFreq = new Map(); // count -> number of values having this count
        let distinctVals = 0;
        for (let j = i; j < n; j++) {
            const val = nums[j];
            const oldCount = freq.get(val) || 0;
            const newCount = oldCount + 1;
            freq.set(val, newCount);
            if (oldCount === 0) {
                distinctVals++;
            }
            // update countFreq for oldCount
            if (oldCount > 0) {
                const oldCountFreq = countFreq.get(oldCount) || 0;
                if (oldCountFreq <= 1) {
                    countFreq.delete(oldCount);
                } else {
                    countFreq.set(oldCount, oldCountFreq - 1);
                }
            }
            // update countFreq for newCount
            const newCountFreq = (countFreq.get(newCount) || 0) + 1;
            countFreq.set(newCount, newCountFreq);
            // check condition
            let valid = false;
            if (distinctVals === 1) {
                valid = true;
            } else {
                if (countFreq.size === 2) {
                    const keys = [...countFreq.keys()].sort((a, b) => a - b);
                    if (keys[1] === 2 * keys[0]) {
                        valid = true;
                    }
                }
            }
            if (valid) {
                maxLen = Math.max(maxLen, j - i + 1);
            }
        }
    }
    return maxLen;
}

// Explanation: We use a brute-force approach with optimization. For each starting index i, we extend the subarray to j, updating frequency maps. We maintain a frequency map (value->count) and a count frequency map (count->number of values having that count). For each subarray, we check if it is frequency balanced: if there is only one distinct value, it's valid; otherwise, we need exactly two distinct frequencies f and 2f (with both present). The check is O(1) per extension assuming the number of distinct frequencies is small. Overall complexity is O(n^2) in practice.
// Problem: Add Two Numbers (LeetCode #2 - Medium)
// Link: https://leetcode.com/problems/add-two-numbers/
// Description: You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and...

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// 
// Solution:
function addTwoNumbers(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;
    
    while (l1 !== null || l2 !== null || carry !== 0) {
        const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }
    
    return dummy.next;
}
// Explanation: We use a dummy head to simplify the code. We iterate through both lists, adding corresponding digits and carry. The carry is propagated to the next digit. We create a new node for each sum digit. The time complexity is O(max(m, n)) where m and n are the lengths of the two lists. The space complexity is O(max(m, n)) for the new list.



// Problem: Digit Frequency Score
// Example 1:
// Input: n = 122
// Output: 5
// Explanation: The digit 1 appears 1 time, contributing 1 * 1 = 1. The digit 2 appears 2 times, contributing 2 * 2 = 4. Thus, the score of n is 1 + 4 = 5.
// Example 2:
// Input: n = 101
// Output: 2
// Explanation: The digit 0 appears 1 time, contributing 0 * 1 = 0. The digit 1 appears 2 times, contributing 1 * 2 = 2. Thus, the score of n is 0 + 2 = 2.
// Solution:
function digitFrequencyScore(n) {
    const s = String(n);
    const freq = new Map();
    for (const ch of s) {
        const digit = parseInt(ch, 10);
        freq.set(digit, (freq.get(digit) || 0) + 1);
    }
    let sum = 0;
    for (const [digit, count] of freq.entries()) {
        sum += digit * count;
    }
    return sum;
}
// Explanation: We convert the number to a string to iterate over each digit. We count the frequency of each digit using a map. Then we compute the sum of each digit multiplied by its frequency. This runs in O(d) time where d is the number of digits.


// Problem: Sum of Compatible Numbers in Range I (LeetCode #4319 - Easy)
// Link: https://leetcode.com/problems/sum-of-compatible-numbers-in-range-i/
// Description: Given two integers n and k, find the sum of all positive integers x such that the absolute difference between n and x is at most k, and the bitwise AND of n and x is zero.
//
// Example 1:
// Input: n = 2, k = 3
// Output: 10
// Explanation: The compatible integers are 1, 4, 5.
//
// Example 2:
// Input: n = 5, k = 1
// Output: 0
// Explanation: There are no compatible integers in the range [4, 6].
//
// Solution:
function sumOfCompatibleNumbers(n, k) {
  let sum = 0;
  const start = Math.max(1, n - k);
  const end = n + k;
  for (let x = start; x <= end; x++) {
    if ((n & x) === 0) {
      sum += x;
    }
  }
  return sum;
}
// Explanation: We iterate through all integers x in the range [max(1, n-k), n+k]. For each x, we check if (n & x) === 0. If true, we add x to the sum. This works because the constraints are small (n, k <= 100), so O(k) time is acceptable.


// Problem: Sum of Compatible Numbers in Range I (LeetCode #4319 - Easy)
// Link: https://leetcode.com/problems/sum-of-compatible-numbers-in-range-i/
// Description: Given two integers n and k, find the sum of all positive integers x such that the absolute difference between n and x is at most k, and the bitwise AND of n and x is zero.
//
// Example 1:
// Input: n = 2, k = 3
// Output: 10
// Explanation: The compatible integers are 1, 4, 5.
//
// Example 2:
// Input: n = 5, k = 1
// Output: 0
// Explanation: There are no compatible integers in the range [4, 6].
//
// Solution:
function sumOfCompatibleNumbers(n, k) {
  let sum = 0;
  const start = Math.max(1, n - k);
  const end = n + k;
  for (let x = start; x <= end; x++) {
    if ((n & x) === 0) {
      sum += x;
    }
  }
  return sum;
}
// Explanation: We iterate through all integers x in the range [max(1, n-k), n+k]. For each x, we check if (n & x) === 0. If true, we add x to the sum. This works because the constraints are small (n, k <= 100), so O(k) time is acceptable.


// Problem: Minimum Swaps to Move Zeros to End (LeetCode #4316 - Easy)
// Link: https://leetcode.com/problems/minimum-swaps-to-move-zeros-to-end/
// Description: Given an integer array nums, in one operation you can choose any two distinct indices i and j and swap nums[i] and nums[j]. Return the minimum number of operations required to move all 0s to the end of the array.
//
// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: 2
// Explanation: We perform the following swap operations:
//    Swap nums[0] and nums[3], giving nums = [3, 1, 0, 0, 12].
//    Swap nums[2] and nums[4], giving nums = [3, 1, 12, 0, 0].
//
// Solution:
function minimumSwaps(nums) {
  const n = nums.length;
  let zeroCount = 0;
  for (const num of nums) {
    if (num === 0) zeroCount++;
  }
  if (zeroCount === 0) return 0;
  let swaps = 0;
  for (let i = 0; i < n - zeroCount; i++) {
    if (nums[i] === 0) {
      swaps++;
    }
  }
  return swaps;
}
// Explanation: First count the total number of zeros (zeroCount). The last zeroCount positions should be zeros in the final array. Thus, the first n - zeroCount positions should contain only non-zeros. Any zero appearing in this prefix must be swapped with a non-zero from the suffix. The number of such zeros in the prefix is the minimum number of swaps needed.


// Problem: Create Grid With Exactly One Path
// Example 1:
// Input: m = 2, n = 3
// Output: ["..#","#.."]
// Example 2:
// Input: m = 3, n = 3
// Output: ["..#","#..","##."]
// Example 3:
// Input: m = 1, n = 4
// Output: ["...."]

// Solution:
function createGrid(m, n) {
  // Initialize grid with '#'
  const grid = Array.from({ length: m }, () => Array(n).fill('#'));
  // Set first row to '.'
  for (let j = 0; j < n; j++) {
    grid[0][j] = '.';
  }
  // Set last column to '.'
  for (let i = 0; i < m; i++) {
    grid[i][n - 1] = '.';
  }
  // Convert each row to string
  return grid.map(row => row.join(''));
}

// Explanation: We set the first row and last column to '.' and all other cells to '#'. This forces a unique path that goes right to the last column then down to the bottom-right corner.
// Problem: Maximum Manhattan Distance After All Moves
// Example 1:
// Input: moves = "L_D_"
// Output: 4
// Explanation:
// One optimal choice is:
//   'L': (0,0) -> (-1,0)
//   '_' treated as 'D': (-1,0) -> (-1,-1)
//   'D': (-1,-1) -> (-1,-2)
//   '_' treated as 'L': (-1,-2) -> (-2,-2)
// The final Manhattan distance from the origin is |0 - (-2)| + |0 - (-2)| = 4.
// Example 2:
// Input: moves = "U_R"
// Output: 3
// Explanation:
// One optimal choice is:
//   'U': (0,0) -> (0,1)
//   '_' treated as 'U': (0,1) -> (0,2)
//   'R': (0,2) -> (1,2)
// The final Manhattan distance from the origin is |0 - 1| + |0 - 2| = 3.
// Solution:
// function maxDistance(moves) {
//   let dx = 0, dy = 0, underscore = 0;
//   for (const ch of moves) {
//     if (ch === 'U') dy++;
//     else if (ch === 'D') dy--;
//     else if (ch === 'R') dx++;
//     else if (ch === 'L') dx--;
//     else if (ch === '_') underscore++;
//   }
//   return Math.abs(dx) + Math.abs(dy) + underscore;
// }
// Explanation: We compute the net displacement from known moves (dx, dy) and count underscores (_). Each underscore can be used to move in a direction that increases the Manhattan distance by 1, regardless of whether we allocate it to horizontal or vertical. Thus the maximum distance is |dx| + |dy| + underscore count.


// Problem: Minimum Lights to Illuminate a Road
// Example 1:
// Input: lights = [0,0,0,0]
// Output: 2
// Explanation: One optimal placement is:
//   Install an additional bulb at position 1, illuminating positions [0, 1, 2].
//   Install an additional bulb at position 3, illuminating positions [2, 3].
//   Therefore, the minimum number of additional bulbs required is 2.
// Example 2:
// Input: lights = [0,0,0,2,0]
// Output: 1
// Explanation: Since lights[3] = 2, the working bulb at position 3 illuminates positions [1, 2, 3, 4].
//   Installing an additional bulb at position 1 illuminates positions [0, 1, 2], making every position visible.
//   Therefore, the minimum number of additional bulbs required is 1.
// Solution:
function minLights(lights) {
    const n = lights.length;
    // Step 1: create intervals from existing bulbs
    const intervals = [];
    for (let i = 0; i < n; i++) {
        if (lights[i] > 0) {
            const left = Math.max(0, i - lights[i]);
            const right = Math.min(n - 1, i + lights[i]);
            intervals.push([left, right]);
        }
    }
    // Step 2: merge intervals
    if (intervals.length === 0) {
        // No existing bulbs, so the whole road is a gap
        return coverGapInline(0, n - 1, n);
    }
    intervals.sort((a, b) => a[0] - b[0]);
    const merged = [];
    let current = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= current[1] + 1) {
            // Overlapping or adjacent: merge
            current[1] = Math.max(current[1], intervals[i][1]);
        } else {
            merged.push(current);
            current = intervals[i];
        }
    }
    merged.push(current);
    // Step 3: find gaps
    const gaps = [];
    // Gap before the first interval
    if (merged[0][0] > 0) {
        gaps.push([0, merged[0][0] - 1]);
    }
    // Gaps between intervals
    for (let i = 0; i < merged.length - 1; i++) {
        if (merged[i][1] + 1 < merged[i + 1][0]) {
            gaps.push([merged[i][1] + 1, merged[i + 1][0] - 1]);
        }
    }
    // Gap after the last interval
    if (merged[merged.length - 1][1] < n - 1) {
        gaps.push([merged[merged.length - 1][1] + 1, n - 1]);
    }
    // If there are no gaps, return 0
    if (gaps.length === 0) {
        return 0;
    }
    // Step 4: cover each gap
    let total = 0;
    for (const gap of gaps) {
        total += coverGapInline(gap[0], gap[1], n);
    }
    return total;
}

function coverGapInline(start, end, n) {
    let current = start;
    let count = 0;
    while (current <= end) {
        count++;
        // Place a bulb at position = min(current+1, n-1)
        const bulbPos = Math.min(current + 1, n - 1);
        // This bulb covers from Math.max(0, bulbPos-1) to Math.min(n-1, bulbPos+1)
        current = Math.min(n - 1, bulbPos + 1) + 1;
    }
    return count;
}


// Problem: Limit Occurrences in Sorted Array
// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,1,2,2,3]
Explanation: Each element can appear at most 2 times.
- The element 1 appears 3 times, so only 2 occurrences are kept.
- The element 2 appears 2 times, so both occurrences are kept.
- The element 3 appears 1 time, so it is kept.
Thus, the resulting array is [1, 1, 2, 2, 3].
// Example 2:
// Input: nums = [1,2,3], k = 1
Output: [1,2,3]
Explanation: All elements are distinct and already appear at most once, so the array remains unchanged.
// Solution:
// function limitOccurrences(nums, k) {
    const result = [];
    let i = 0;
    while (i < nums.length) {
        const val = nums[i];
        let count = 0;
        while (i < nums.length && nums[i] === val) {
            count++;
            i++;
        }
        const keep = Math.min(count, k);
        for (let j = 0; j < keep; j++) {
            result.push(val);
        }
    }
    return result;
}
// Explanation:
// We iterate through the sorted array, counting consecutive occurrences of each value. For each distinct value, we keep the minimum of its count and k, pushing that many copies to the result array. This ensures each distinct element appears at most k times, and if it appears at least k times, we keep exactly k. The algorithm runs in O(n) time and uses O(n) extra space for the result (or O(1) if we modify the input array in place).

// Problem: Valid Subarrays With Matching Sum Digits I
// Example 1:
// Input: nums = [1,100,1], x = 1
// Output: 4
// Explanation: The valid subarrays are:
// nums[0..0]: sum = 1
// nums[0..1]: sum = 1 + 100 = 101
// nums[1..2]: sum = 100 + 1 = 101
// nums[2..2]: sum = 1
// Thus, the answer is 4.

// Example 2:
// Input: nums = [1], x = 2
// Output: 0
// Explanation: The only subarray is nums[0..0] with a sum of 1, which does not satisfy the conditions.
// Thus, the answer is 0.

// Solution:
/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var countValidSubarrays = function(nums, x) {
    const n = nums.length;
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            const sum = prefix[j + 1] - prefix[i];
            if (sum % 10 !== x) continue;
            let s = sum;
            while (s >= 10) {
                s = Math.floor(s / 10);
            }
            if (s === x) count++;
        }
    }
    return count;
}

// Explanation: We use prefix sums to compute subarray sums in O(1) time.
// We iterate over all possible start and end indices (O(n^2)), which is acceptable for n <= 1500.
// For each subarray sum, we check if the last digit equals x and the first digit equals x.
// To get the first digit, we repeatedly divide by 10 until the number is less than 10.
// Time complexity: O(n^2 * d) where d is the number of digits (at most 13 for sum up to 1.5e12).
// Space complexity: O(n) for the prefix array.
// Problem: Palindrome Number (LeetCode #9 - Easy)
// Link: https://leetcode.com/problems/palindrome-number/
// Description: Given an integer x, return true if x is a palindrome, and false otherwise.
//
// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
//
// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
//
// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
//
// Solution:
function isPalindrome(x) {
    if (x < 0) return false;
    let reversed = 0;
    let original = x;
    while (x > 0) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return original === reversed;
}
// Explanation: We reverse the number mathematically and compare with the original. Negative numbers are not palindromes. Time complexity O(log10(x)) (number of digits), space complexity O(1).


// Problem: Password Strength
// Link: https://leetcode.com/problems/password-strength/
// Description: You are given a string password.
// The strength of the password is calculated based on the following rules:
//   1 point for each distinct lowercase letter ('a' to 'z').
//   2 points for each distinct uppercase letter ('A' to 'Z').
//   3 points for each distinct digit ('0' to '9').
//   5 points for each distinct special character from the set "!@#$".
// Each character contributes at most once, even if it appears multiple times.
// Return an integer denoting the strength of the password.
// 
// Example 1:
// Input: password = "aA1!"
// Output: 11
// Explanation:
//   The distinct characters are 'a', 'A', '1' and '!'.
//   Thus, the strength = 1 + 2 + 3 + 5 = 11.
// 
// Example 2:
// Input: password = "bbB11#"
// Output: 11
// Explanation:
//   The distinct characters are 'b', 'B', '1' and '#'.
//   Thus, the strength = 1 + 2 + 3 + 5 = 11.
// 
// Solution:
// var passwordStrength = function(password) {
//     const lower = new Set();
//     const upper = new Set();
//     const digit = new Set();
//     const special = new Set();
//     const specialSet = new Set(['!', '@', '#', '$']);
    
//     for (const ch of password) {
//         if (ch >= 'a' && ch <= 'z') {
//             lower.add(ch);
//         } else if (ch >= 'A' && ch <= 'Z') {
//             upper.add(ch);
//         } else if (ch >= '0' && ch <= '9') {
//             digit.add(ch);
//         } else if (specialSet.has(ch)) {
//             special.add(ch);
//         }
//     }
    
//     let score = 0;
//     score += lower.size * 1;
//     score += upper.size * 2;
//     score += digit.size * 3;
//     score += special.size * 5;
//     
//     return score;
// };
// 
// Explanation: We use four sets to track distinct characters in each category. We iterate through the password once, adding each character to the appropriate set if it belongs to that category. After processing, we compute the score by multiplying the size of each set by its respective weight and summing them up. This runs in O(n) time where n is the length of the password, and uses O(1) extra space (since the sets are bounded by the size of the character sets: 26 lowercase, 26 uppercase, 10 digits, 4 specials).

// Title: Two Sum
// Link: https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
};
\n\n// Problem: Exactly One Consecutive Set Bits Pair (LeetCode #4307 - Easy)\n// Link: https://leetcode.com/problems/exactly-one-consecutive-set-bits-pair/\n// Description: You are given an integer n.\n\n// Example 1:\n// Input: n = 6\n// Output: true\n// Explanation: Binary representation of 6 is 110. There is exactly one adjacent pair of set bits (11). Thus, the answer is true.\n\n// Example 2:\n// Input: n = 5\n// Output: false\n// Explanation: Binary representation of 5 is 101. There is no adjacent pair of set bits. Thus, the answer is false.\n\n// Solution:\nfunction hasExactlyOnePair(n) {\n    let bin = n.toString(2);\n    let count = 0;\n    for (let i = 0; i < bin.length - 1; i++) {\n        if (bin[i] === "1" && bin[i+1] === "1") {\n            count++;\n        }\n    }\n    return count === 1;\n}\n\n// Explanation: Convert the number to its binary string representation. Iterate through the string counting occurrences of adjacent 1s (i.e., "11"). If the count is exactly one, return true; otherwise, false. This runs in O(log n) time and O(1) extra space.\n
// Problem: Exactly One Consecutive Set Bits Pair (LeetCode #4307 - 1)
// Link: https://leetcode.com/problems/exactly-one-consecutive-set-bits-pair/
// Description: You are given an integer n.

// Example 1:
// Input: n = 6
// Output: true
// Explanation: Binary representation of 6 is 110. There is exactly one adjacent pair of set bits (11). Thus, the answer is true.

// Example 2:
// Input: n = 5
// Output: false
// Explanation: Binary representation of 5 is 101. There is no adjacent pair of set bits. Thus, the answer is false.

// Solution:
/**
 * @param {number} n
 * @return {boolean}
 */
var consecutiveSetBits = function(n) {
    let bin = n.toString(2);
    let count = 0;
    for (let i = 0; i < bin.length - 1; i++) {
        if (bin[i] === '1' && bin[i+1] === '1') {
            count++;
        }
    }
    return count === 1;
}

// Explanation:
Convert the number to its binary string representation. Iterate through the string counting occurrences of adjacent 1s (i.e., "11"). If the count is exactly one, return true; otherwise, false. This runs in O(log n) time and O(1) extra space.

// Problem: Roman to Integer (LeetCode #13 - Easy)
// Link: https://leetcode.com/problems/roman-to-integer/
// Description: Roman numerals are represented by seven different symbols:  I ,  V ,  X ,  L ,  C ,  D  and  M .

// Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3.
//
// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= III = 3.
//
// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90, IV = 4.

// Solution:
function romanToInt(s) {
    const roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let total = 0;
    let prev = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        const val = roman[s[i]];
        if (val < prev) {
            total -= val;
        } else {
            total += val;
        }
        prev = val;
    }
    return total;
}

// Explanation: We iterate from right to left, adding the value of the current symbol.
// If a symbol is smaller than the symbol to its right, we subtract it (like IV for 4).
// Otherwise, we add it. This handles the subtractive notation correctly.

// Problem: Maximum Total Sum of K Selected Elements (LeetCode #4348 - Medium)
// Link: https://leetcode.com/problems/maximum-total-sum-of-k-selected-elements/
// Description: You are given an integer array nums and two integers k and mul.
// Select exactly k elements from nums. For each selected element, independently choose one of the following:
//   - Add the element's value to the total sum.
//   - Multiply the element by the current value of mul and add the result to the total sum.
// After processing each selected element, mul decreases by 1 (regardless of the choice). The current value of mul may become 0 or negative.
// Return the maximum possible total sum.
// Example 1:
// Input: nums = [6,1,2,9], k = 3, mul = 2
// Output: 26
// Explanation:
// One optimal selection is nums[3] = 9, nums[0] = 6, and nums[2] = 2.
// Process nums[2] = 2.
// Step 1: Multiply 9 * 2 = 18 (mul becomes 1)
// Step 2: Multiply 6 * 1 = 6 (mul becomes 0)
// Step 3: Add 2 (mul becomes -1)
// Total = 18 + 6 + 2 = 26.
// Example 2:
// Input: nums = [3,7,5,2], k = 2, mul = 4
// Output: 43
// Explanation:
// One optimal selection is nums[1] = 7 and nums[2] = 5.
// Step 1: Multiply 7 * 4 = 28 (mul becomes 3)
// Step 2: Multiply 5 * 3 = 15 (mul becomes 2)
// Total = 28 + 15 = 43.
// Example 3:
// Input: nums = [4,4], k = 1, mul = 1
// Output: 4
// Explanation:
// Select nums[0] = 4.
// Multiply 4 * 1 = 4 (mul becomes 0)
// Total = 4.
// Solution:
function maxSumAfterOperations(nums, k, mul) {
  // Sort descending to pick the k largest elements
  const sorted = [...nums].sort((a, b) => b - a);
  const selected = sorted.slice(0, k);
  // Base sum if we add all selected elements
  let base = 0;
  for (const val of selected) {
    base += val;
  }
  // Prefix sums of selected values and prefix sums of values * index
  const n = selected.length;
  const prefixSum = new Array(n + 1).fill(0);
  const prefixWeighted = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + selected[i];
    prefixWeighted[i + 1] = prefixWeighted[i] + selected[i] * i;
  }
  let best = base;
  const maxT = Math.min(k, mul); // we only consider multipliers > 0
  for (let t = 1; t <= maxT; t++) {
    // total = base + (mul - 1) * P[t] - W[t]
    const total = base + (mul - 1) * prefixSum[t] - prefixWeighted[t];
    if (total > best) {
      best = total;
    }
  }
  return best;
}
// Explanation:
// We first select the k largest numbers because any optimal solution can be transformed to use the k largest without decreasing the sum.
// Let the selected numbers be sorted in descending order: a0 >= a1 >= ... >= a_{k-1}.
// Suppose we decide to multiply exactly t of them (0 <= t <= min(k, mul)). To maximize the sum, we assign the largest multipliers to the largest numbers.
// The multipliers for multiplication are mul, mul-1, ..., mul-t+1 (each step mul decreases by 1).
// The total sum equals:
//   sum_{i=0}^{k-1} a_i   (if we added all)
//   + sum_{i=0}^{t-1} a_i * (mul - i - 1)   (extra gain from multiplying instead of adding)
// Using prefix sums we can compute this efficiently for each t in O(k) after sorting.
// Time complexity: O(n log n) for sorting + O(k) for prefix sums and loop.
// Space complexity: O(k) for the selected array and prefix arrays.


// Problem: Maximum Total Sum of K Selected Elements
// Solution:
function maxSum(nums, k, mul) {
    const n = nums.length;
    // Calculate weights for each position
    const weights = new Array(k);
    for (let i = 0; i < k; i++) {
        const w = mul - i;
        weights[i] = Math.max(w, 1);
    }
    // Sort weights descending
    weights.sort((a, b) => b - a);
    // Sort nums descending
    const sortedNums = [...nums].sort((a, b) => b - a);
    // Take top k numbers
    const selected = sortedNums.slice(0, k);
    // Compute sum
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += weights[i] * selected[i];
    }
    return sum;
}
// Explanation: For each position i (0-indexed), the multiplier is mul - i. We choose multiplication if multiplier >= 1, else addition.\n// This reduces to assigning weights w_i = max(mul - i, 1) to each position. To maximize sum, we sort weights and selected numbers in descending order and pair them.\n// Problem: Minimum Energy to Maintain Brightness - You are given an integer n, representing n light bulbs arranged in a line and indexed from 0 to n - 1. You are also given an integer brightness and a 2D integer array intervals, where intervals[i] = [start_i, end_i] represents an inclusive time interval during which the lighting requirement must be satisfied.
// Example 1:
// Input: n = 5, brightness = 5, intervals = [[6,12]]
// Output: 14
// Explanation: Turn on the light bulbs at positions 1 and 4.
// Example 2:
// Input: n = 2, brightness = 1, intervals = [[0,0],[2,2]]
// Output: 2
// Explanation: Turn on one light bulb during each active interval.
// Solution:
// function minEnergy(n, brightness, intervals) {
//     if (intervals.length === 0) return 0;
//     intervals.sort((a, b) => a[0] - b[0]);
//     let total = 0;
//     let curStart = intervals[0][0];
//     let curEnd = intervals[0][1];
//     for (let i = 1; i < intervals.length; i++) {
//         const [s, e] = intervals[i];
//         if (s <= curEnd + 1) {
//             if (e > curEnd) curEnd = e;
//         } else {
//             total += curEnd - curStart + 1;
//             curStart = s;
//             curEnd = e;
//         }
//     }
//     total += curEnd - curStart + 1;
//     const bulbsNeeded = Math.ceil(brightness / 3);
//     return total * bulbsNeeded;
// }
// Explanation: Each bulb when on illuminates itself and its immediate neighbors (if they exist). To achieve at least brightness illuminated positions, we need at least ceil(brightness/3) bulbs per time unit because each bulb can cover up to 3 positions. The total energy is the product of the number of bulbs needed per time unit and the total length of the union of intervals (since each time unit in the union requires the same number of bulbs). We compute the union length by sorting and merging intervals.
// Problem: Check Adjacent Digit Differences
// Example 1:
// Input: s = "132"
// Output: true
// Explanation:
//   The absolute difference between digits at s[0] and s[1] is abs(1 - 3) = 2.
//   The absolute difference between digits at s[1] and s[2] is abs(3 - 2) = 1.
//   Since both differences are at most 2, the answer is true.
// Example 2:
// Input: s = "129"
// Output: false
// Explanation:
//   The absolute difference between digits at s[0] and s[1] is abs(1 - 2) = 1.
//   The absolute difference between digits at s[1] and s[2] is abs(2 - 9) = 7, which is greater than 2.
//   Therefore, the answer is false.
// Solution:
/**
 * @param {string} s
 * @return {boolean}
 */
var isAdjacentDiffAtMostTwo = function(s) {
    for (let i = 0; i < s.length - 1; i++) {
        const diff = Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
        if (diff > 2) {
            return false;
        }
    }
    return true;
};
// Explanation: We iterate through the string, checking the absolute difference between each pair of adjacent characters. If any difference exceeds 2, we return false. Otherwise, after the loop, we return true.

// Problem: Minimum Energy to Maintain Brightness (LeetCode #4306 - Medium)
// Link: https://leetcode.com/problems/minimum-energy-to-maintain-brightness/
// Description: You are given an integer n, representing n light bulbs arranged in a line and indexed from 0 to n - 1.
// You are also given an integer brightness and integer array intervals, where intervals[i] = [start_i, end_i] represents an inclusive time interval during which the lighting requirement must be satisfied.
// At each time unit, every bulb can independently be either on or off. A bulb that is on illuminates its own position and its adjacent positions, if they exist.
// The total illumination at a time unit is the number of illuminated positions. Each position is counted at most once.
// For every integer time unit covered by at least one interval in intervals, the total illumination must be at least brightness. At time units not covered by any interval, all bulbs may remain off.
// Each bulb that is on consumes 1 unit of energy for that time unit.
// Return an integer denoting the minimum total energy required.
// Example 1:
// Input: n = 5, brightness = 5, intervals = [[6,12]]
// Output: 14
// Explanation: Turn on the light bulbs at positions 1 and 4.
// Example 2:
// Input: n = 2, brightness = 1, intervals = [[0,0],[2,2]]
// Output: 2
// Explanation: Turn on one light bulb during each active interval.
// Example 3:
// Input: n = 4, brightness = 2, intervals = [[1,3],[2,4]]
// Output: 4
// Explanation: Turn on one light bulb. It can illuminate at least 2 positions.
// Solution:
function minEnergy(n, brightness, intervals) {
    if (intervals.length === 0) return 0;
    // Sort intervals by start
    intervals.sort((a, b) => a[0] - b[0]);
    let totalCovered = 0;
    let curStart = intervals[0][0];
    let curEnd = intervals[0][1];
    for (let i = 1; i < intervals.length; i++) {
        const [s, e] = intervals[i];
        if (s <= curEnd + 1) {
            // Overlapping or adjacent, merge
            if (e > curEnd) curEnd = e;
        } else {
            // No overlap, add previous interval length
            totalCovered += curEnd - curStart + 1;
            curStart = s;
            curEnd = e;
        }
    }
    totalCovered += curEnd - curStart + 1;
    const bulbsPerTime = Math.ceil(brightness / 3); // equivalent to (brightness + 2) // 3
    return totalCovered * bulbsPerTime;
}
// Explanation: Each bulb when on illuminates itself and its immediate neighbors, covering up to 3 positions.
// To achieve at least brightness illuminated positions per time unit, we need at least ceil(brightness/3) bulbs.
// The minimum total energy is the product of the total time units covered by the union of intervals and the bulbs needed per unit time.


// Problem: Minimum Energy to Maintain Brightness (LeetCode #4306 - Medium)
// Link: https://leetcode.com/problems/minimum-energy-to-maintain-brightness/
// Description: You are given an integer n, representing n light bulbs arranged in a line and indexed from 0 to n - 1.
// You are also given an integer brightness and integer array intervals, where intervals[i] = [start_i, end_i] represents an inclusive time interval during which the lighting requirement must be satisfied.
// At each time unit, every bulb can independently be either on or off. A bulb that is on illuminates its own position and its adjacent positions, if they exist.
// The total illumination at a time unit is the number of illuminated positions. Each position is counted at most once.
// For every integer time unit covered by at least one interval in intervals, the total illumination must be at least brightness. At time units not covered by any interval, all bulbs may remain off. Each bulb that is on consumes 1 unit of energy for that time unit.
// Return an integer denoting the minimum total energy required.
// Example 1:
// Input: n = 5, brightness = 5, intervals = [[6,12]]
// Output: 14
// Explanation: Turn on the light bulbs at positions 1 and 4.
// Example 2:
// Input: n = 2, brightness = 1, intervals = [[0,0],[2,2]]
// Output: 2
// Explanation: Turn on one light bulb during each active interval.
// Example 3:
// Input: n = 4, brightness = 2, intervals = [[1,3],[2,4]]
// Output: 4
// Explanation: Turn on one light bulb. It can illuminate at least 2 positions.
// Solution:
function minEnergy(n, brightness, intervals) {
    if (intervals.length === 0) return 0;
    // Sort intervals by start
    intervals.sort((a, b) => a[0] - b[0]);
    let totalCovered = 0;
    let curStart = intervals[0][0];
    let curEnd = intervals[0][1];
    for (let i = 1; i < intervals.length; i++) {
        const [s, e] = intervals[i];
        if (s <= curEnd + 1) {
            // Overlapping or adjacent, merge
            if (e > curEnd) curEnd = e;
        } else {
            // No overlap, add previous interval length
            totalCovered += curEnd - curStart + 1;
            curStart = s;
            curEnd = e;
        }
    }
    totalCovered += curEnd - curStart + 1;
    const bulbsPerTime = Math.ceil(brightness / 3); // equivalent to (brightness + 2) // 3
    return totalCovered * bulbsPerTime;
}
// Explanation: Each bulb when on illuminates itself and its immediate neighbors, covering up to 3 positions.
// To achieve at least brightness illuminated positions per time unit, we need at least ceil(brightness/3) bulbs.
// The minimum total energy is the product of the total time units covered by the union of intervals and the bulbs needed per unit time.


// Problem: Sum of Integers with Maximum Digit Range
// Link: https://leetcode.com/problems/sum-of-integers-with-maximum-digit-range/
// Description: You are given an integer array nums. The digit range of an integer is defined as the difference between its largest digit and smallest digit. For example, the digit range of 5724 is 7 - 2 = 5. Return the sum of all integers in nums whose digit range is equal to the maximum digit range among all integers in the array.
// Example 1:
// Input: nums = [5724,111,350]
// Output: 6074
// Explanation:
// i   nums[i]   Largest   Smallest   Digit Range
// 0   5724      7         2          5
// 1   111       1         1          0
// 2   350       5         0          5
// The maximum digit range is 5. The integers with this digit range are 5724 and 350, so the answer is 5724 + 350 = 6074.
//
// Example 2:
// Input: nums = [90,900]
// Output: 990
// Explanation:
// i   nums[i]   Largest   Smallest   Digit Range
// 0   90        9         0          9
// 1   900       9         0          9
// The maximum digit range is 9. Both integers have this digit range, so the answer is 90 + 900 = 990.

// Solution:
function maxDigitRange(nums) {
  let maxRange = -1;
  const ranges = [];
  for (const num of nums) {
    let min = 9, max = 0;
    let n = Math.abs(num);
    if (n === 0) {
      min = 0;
      max = 0;
    } else {
      while (n > 0) {
        const digit = n % 10;
        if (digit < min) min = digit;
        if (digit > max) max = digit;
        n = Math.floor(n / 10);
      }
    }
    const range = max - min;
    ranges.push(range);
    if (range > maxRange) maxRange = range;
  }
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (ranges[i] === maxRange) {
      sum += nums[i];
    }
  }
  return sum;
}

// Explanation: We compute the digit range (max digit - min digit) for each number.
// We track the maximum digit range encountered. Then we sum all numbers whose digit range equals this maximum.
// Time complexity: O(n * d) where n is the length of nums and d is the maximum number of digits (at most 5 due to constraints).

// Problem: Sum of Integers with Maximum Digit Range (LeetCode #4356 - Easy)
// Link: https://leetcode.com/problems/sum-of-integers-with-maximum-digit-range/
// Description: Given an integer array nums, return the sum of all integers whose digit range (max digit - min digit) equals the maximum digit range among all numbers in the array.

// Example 1:
// Input: nums = [5724,111,350]
// Output: 6074
// Explanation: The digit range of 5724 is 7-2=5, of 111 is 0, of 350 is 5-0=5. Max digit range is 5. Sum of numbers with digit range 5: 5724+350=6074.

// Example 2:
// Input: nums = [90,900]
// Output: 990
// Explanation: Digit range of 90 is 9-0=9, of 900 is 9-0=9. Max is 9. Sum is 90+900=990.

// Solution:
function sumOfNumbersWithMaxDigitRange(nums) {
  let maxRange = 0;
  const ranges = [];
  for (const num of nums) {
    let minDigit = 9, maxDigit = 0;
    let n = num;
    while (n > 0) {
      const digit = n % 10;
      if (digit < minDigit) minDigit = digit;
      if (digit > maxDigit) maxDigit = digit;
      n = Math.floor(n / 10);
    }
    // For numbers like 0? but constraints say >=10, so at least two digits.
    const range = maxDigit - minDigit;
    ranges.push(range);
    if (range > maxRange) maxRange = range;
  }
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (ranges[i] === maxRange) {
      sum += nums[i];
    }
  }
  return sum;
}

// Explanation: We compute the digit range (max digit - min digit) for each number. We track the maximum digit range encountered. Then we sum all numbers whose digit range equals this maximum. Time complexity: O(n * d) where n is length of nums and d is max digits (at most 5 due to constraints). Space complexity: O(n) for storing ranges.
