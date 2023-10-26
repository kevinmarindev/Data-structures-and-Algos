// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

function areThereDuplicates(...args){
  
  const object = {}
  //loop over arr
  for (const element of args) {
    console.log(element)
    if(object.hasOwnProperty(element)) return true
    object[element] = 1;
  }
  
  return false
  // check if prop exists if prop exists return true 
  // create prop
  
}

console.log(areThereDuplicates(1, 2, 3,44,5,6,7,8,11,44) )
// false
console.log(areThereDuplicates(1, 2, 2) )
// true 
console.log(areThereDuplicates('a', 'b', 'c', 'b', 'd') ) 
// true 

console.log('========= AVERAGE PAIR ======')
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
// Bonus Constraints:
// Time: O(N) Space: O(1)

function averagePair(arr, avg){
  // ensure there are at lest two items in the array
  // numbers can be negative
  //place pointers on opposite end and move according to wether the result obtained is smaller or bigger than desired.
  if(arr.length < 2) return false;
  let i = arr[0]
  let j = arr[arr.length - 1]
  while (i < j) {
    const value = (i + j) / 2
    if (value === avg) return true
    value > avg ? j-- : i++ 
  }
  return false
}


// console.log(averagePair([1,2,3],2.5))
//  // true
// console.log(averagePair([1,3,3,5,6,7,10,12,19],8))
//  // true
// console.log(averagePair([-1,0,3,4,5,6], 4.1))
//  // false
// console.log(averagePair([],4))
// // false


//========================= PROBLEM 3 ======================\\\\\\\\\
console.log("is subsequence")


// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// function isSubsequence(str1, str2){
//   let i = 0
//   let j = 0

//   while (i !== str1.length || j !== str2.length){
//     if(str1[i] !== str2[j]) j++
//     else if(str1[i] === str2[j]) i++ && j++
//     console.log(str1[i], str2[j])
//   }
//   return i === str1.length
// }

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;

  while (i < str1.length && j < str2.length) {
    if (str1[i] === str2[j]) {
      i++; // Move to the next character in str1
    }
    j++; // Always move to the next character in str2
  }

  return i === str1.length;
}

console.log(isSubsequence('hello', 'hello world'));
 // true
console.log(isSubsequence('sing', 'sting')); 
// true
console.log(isSubsequence('abc', 'abracadabra')); 
// true
console.log(isSubsequence('abc', 'acb'));
// false (order matters)

// i=1 j=1
// i=

console.log("SLIDING WINDOW 1 /MAX SUB ARRAY SUM")
// Sliding Window - maxSubarraySum
// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// CHECK TO SEE that array is longer than second number
function maxSubarraySum(arr, num){
  if(num > arr.length) return null

  let subarray = arr.slice(0, num)

  let temp = subarray.reduce((total, current) => total + current, 0)
  let max = -Infinity

  let i = 0
  let j = num

  while (j < arr.length){
    temp = temp + arr[j] - arr[i]
    if(temp > max) max = temp
    j++ && i++
  }
  return max
}

// console.log(maxSubarraySum([100,200,300,400], 2))
// 700
// console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))
// 39 
// console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2))
// 5
// console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2))
// 5
// console.log(maxSubarraySum([2,3], 3))
// null


console.log("SLIDING WINDOW 2 // MINSUB ARRAY")

// I WASNT ABLE TO SOLVE THIS ONE 
// Sliding Window - minSubArrayLen
// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
function minSubArrayLen(arr, num){
  let i = 0;
  let j = 0;
  let count = 0;
  let window = Infinity;

  while( i < arr.length){
    if(count < num && j < arr.length){
      count += arr[j]
      j++
    }
    else if (count >= num) {
      window = Math.min((j - i), window)
      count -= arr[i]
      i++
    }
    else break
  }
  return window === Infinity ? 0 : window;
}

// minSubArrayLen([2,3,1,2,4,3], 7) 
// // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) 
// // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) 
// // 1 -> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) 
// // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) 
// // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) 
// // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) 
// // 0

//=================================================//=========================================================================================================
console.log("SLIDING WINDOW // FINDLONGEST SUBSTRING")

// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
function findLongestSubstring(str) {
  if(str.length === 0) return 0
  if(str.length === 1) return 1
  let obj = {}
  let max = 0
  let count = 0
  let i = 0
  let j = 0

  while (j < str.length){
    // console.log(str[j])
    if(!obj.hasOwnProperty(str[j])){
      // console.log("adding to obj", str[j])
      obj[str[j]] = 1
      j++
      count++
      // console.log(obj)
      // max = Math.max(max, count)
    }
    else{
      // console.log("found duplicate", str[j])
      i++
      j = i
      obj = {}
      // max = Math.max(max, count)
      count = 0
    }
    max = Math.max(max, count)
  }
  // console.log("out  the loop")
  return max
}

// console.log(findLongestSubstring(''))
// // 0
// console.log(findLongestSubstring('rithmschool') )
// // 7
// console.log(findLongestSubstring('thisisawesome'))
// // 6
// console.log(findLongestSubstring('thecatinthehat'))
// // 7                    j
// console.log(findLongestSubstring('bbbbbb')) 
// // 1
// console.log(findLongestSubstring('longestsubstring'))
// // 8
// console.log(findLongestSubstring('thisishowwedoit'))
// // 6

