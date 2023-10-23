console.log("Hello World!")

// ANAGRAM
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true


const validAnagram = (str1, str2) => {
  // do both words contain the same letters

  //compare string lengths non equivalent lengths should return false
  if (str1.length !== str2.length) return false

  // create two objects each letter will be a key a repeating letter increases the value of that key by one
  const objOne = {}
  const objTwo = {}

  for (let i = 0; i < str1.length; i++ ) {
    if (objOne.hasOwnProperty(str1[i])) objOne[str1[i]]++
    else objOne[str1[i]] = 1
 }

 for (let i = 0; i < str2.length; i++ ) {
    if (objTwo.hasOwnProperty( str2[i])) objTwo[str2[i]]++
    else objTwo[str2[i]] = 1
 }

//  console.log(objOne, objTwo)

 for (const key in objOne) {
  if(!objTwo.hasOwnProperty(key)) return false

  if(objTwo[key] !== objOne[key]) return false
 }

 return true
}

// IDEAL SOLUTION
// function validAnagram(first, second) {
//   if (first.length !== second.length) {
//     return false;
//   }

//   const lookup = {};

//   for (let i = 0; i < first.length; i++) {
//     let letter = first[i];
//     // if letter exists, increment, otherwise set to 1
//     lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
//   }
//   console.log(lookup)

//   for (let i = 0; i < second.length; i++) {
//     let letter = second[i];
//     // can't find letter or letter is zero then it's not an anagram
//     if (!lookup[letter]) {
//       return false;
//     } else {
//       lookup[letter] -= 1;
//     }
//   }

//   return true;
// }


// console.log(validAnagram("rat","car"))
// console.log(validAnagram('awesome', 'awesom'))
// console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'))
// console.log(validAnagram('qwerty', 'qeywrt'))
// console.log(validAnagram('texttwisttime', 'timetwisttext'))


///////////////////////---------------------//////////////////////////////////////-------------------------------------/////
//---------------------------------------------///////////////////////////////////-=-------------------------------------///

// Multiple Pointers - countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. 
// There can be negative numbers in the array, but it will always be sorted.


// as soon as j is not = to 1 replace i +1 with the num that is not equal to it
function countUniqueValues(arr){
  if( arr.length === 0) return 0
  let i = 0
  // let count = 0

  for (let j = 1; j < arr.length; j++) {
    if(arr[i] !== arr[j]){
      arr[i + 1] = arr[j]
      i++
    }
  }
  // console.log("this is the set", new Set([...arr]).size)

  return i + 1

}

console.log(countUniqueValues([1,1,1,1,1,2]))
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))
console.log(countUniqueValues([]))
console.log(countUniqueValues([-2,-1,-1,0,1]))


// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

console.log("same frequence ")

function sameFrequency(num1, num2){
  // use the frequency counter approach
  let str1 = String(num1);
  let str2 = String(num2);
  // convert num to string and store each unique char as a key. keep count
  // after converting to string if nums are not of the same length return false.
  if (str1.length !== str2.length) return false
  // create one object to count unique chars
  let obj1 = {}
  //then loop over again subtracting props 
  for (const char of str1) {
    console.log(char)
    if (!obj1.hasOwnProperty(char)) obj1[char] = 0
    obj1[char]++
  }
  console.log(obj1)

  for (const char of str2) {
    if (!obj1.hasOwnProperty(char)) return false
    if (obj1.char === 0) return false
  }
  return true
}


console.log(sameFrequency(22,222))
