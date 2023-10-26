// power
// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

function power(base, exponent){
  if(exponent === 0) return 1
  base * power(base, exponent - 1); 
}


// productOfArray
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

function productOfArray(arr) {
  console.log(arr)
  if(arr.length === 1) return arr[0]
  return arr[0] * productOfArray(arr.slice(1))
}


console.log(productOfArray([1,2,3,4]))



// reverse
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str) {
  if(str.length === 1) return str[0]
  return str[str.length - 1] + reverse(str.slice(0, str.length - 1))
}

console.log(reverse("kevin"))



// isPalindrome
// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
  let ogStr = str
  let i = 0
  function helper(str){
    if(i === ogStr.length) return true
    if(str[str.length - 1] !== ogStr[i]) return false
    i++
    return helper(str.slice(0, -1))
  }
  return helper(str)
}

console.log(isPalindrome('awesome'))



// capitalizeWords
// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

function capitalizedWords (arr) {
  let capArr = []
  function helper(arr){
    if(arr.length === 0) return capArr
    capArr.push(String(arr[0]).toUpperCase())
    return helper(arr.slice(1))
  }
  return helper(arr)
}

console.log(capitalizedWords(['i', 'am', 'learning', 'recursion'])); 
// ['I', 'AM', 'LEARNING', 'RECURSION']