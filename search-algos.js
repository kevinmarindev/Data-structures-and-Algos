// Binary Search Exercise
// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

// function binarySearch(arr, target){
//   while( arr.length >= 3 ){
//     let middle = Math.floor((arr.length - 1) / 2)
//     if(arr[middle] === target) return middle
//     if(arr[middle] > target) {
//       arr.splice(0, middle)
//     }
//     else if(arr[middle] < target){
//       arr.splice(middle)
//     }
//   }
//   return arr[0] === target ? 0 : arr[1] === target ? 1 : -1
// }


function binarySearch(arr, target){
  let start = 0
  let end = arr.length - 1
  let middle = Math.floor((end + start) / 2)

  while (arr[middle] !== middle && start <= end){
    if(arr[middle] > target){
      // YOU MUST SUBTRACT ONE BECAUSE YOU ALREADY KNOW MIDDLE IS NOT WHAT YOU ARE LOOKING FOR
      end = middle - 1
    } else {
      start = middle + 1
    }
      middle = Math.floor((end + start) / 2)
    }
    return arr[middle] === target ? middle : -1;
  }

console.log(binarySearch([1,2,3,4,5], 5))



/// NAIVE STRING SEARCH ALGORITHM
//find the amount of times a given sub string occurs in a given str

function naiveSubStr(str, subStr){
  let count = 0
  for (let i = 0; i < str.length; i++) {
  let current = i
    for (let j = 0; j < subStr.length; j++) {
      if(str[current] !== subStr[j]) break
      current++
      if(j === subStr.length - 1) count++
    }
  }
  return count
}

console.log(naiveSubStr('the time of the yearn the im imim', 'im'));