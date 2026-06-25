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
