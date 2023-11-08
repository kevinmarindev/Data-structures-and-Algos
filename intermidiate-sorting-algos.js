// MERGE SORT

// FIRST STEP OF MERGE SORT MERGING TWO SORTED ARRAY
function mergeTwo(arr1, arr2){
  let i = 0;
  let j = 0;
  let finalArr = [];
  while(i < arr1.length && j < arr2.length){
    if(arr1[i] < arr2[j]){
      finalArr.push(arr1[i])
      i++
    }
    else if(arr1[i] > arr2[j]){
      finalArr.push(arr2[j])
      j++
    }
    else{
      finalArr.push(arr1[i], arr2[j])
      i++
      j++
    }
    
  }
  console.log(i, j)
  if(i >= arr1.length) finalArr = [...finalArr, ...arr2.splice(j)]
  if(j >= arr2.length) finalArr = [...finalArr, ...arr1.splice(i)]
  return finalArr
}
// console.log(mergeTwo([1,10,50], [2,14,99,100]))

function mergeSort(arr){
  if(arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0,mid))
  let right = mergeSort(arr.slice(mid))
  return mergeTwo(left, right)
}

// [7,2,1,9] = 
// mid 2
// left = megeSort([7,2]) = [2,7]
          //mid = 1
          // left = mergeSort([7])  = [7]
          // right = mergeSort([2]) = [2]
          // return mergetwo([7], [2]) => [2,7]
//right = mergeSort([1,9]) = [1,9]
          // mid = 1
          // left = mergeSort([1]) = [1]
          // right = mergeSort([9]) = [9]
          //return mergetwo([1], [9]) = [1,9]
//return mergeTwo([2,7], [1,9]) = [1,2,7,9]


console.log(mergeSort([7,2,1,9]))