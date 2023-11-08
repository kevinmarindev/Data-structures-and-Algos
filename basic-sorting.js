function bubbleSort(arr){
  for (let i = arr.length - 1; i >= 0; i--) {
    let swaps
    for (let j = 0; j < i; j++) {
      swaps = false
      console.log(arr[j], arr[j + 1])
      if( arr[j] > arr[j + 1]) {
        let temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
        swaps = true
      }       ``
    }
    if(!swaps) break
  }
  return arr
}

// console.log(bubbleSort([4,7,3,4,6,0,2,9,1,25]))


function selectionSort(arr){
  for (let j = 0; j < arr.length; j++) {
    let smallest = arr[j]
    let foundAtIndex = 0
    for (let i = j + 1; i < arr.length; i++) {
      if(smallest > arr[i]) {
      smallest = arr[i]
      foundAtIndex = i
      }
    }
    if(foundAtIndex){
      let temp = arr[j]
      arr[j] = smallest
      arr[foundAtIndex] = temp
    }
  }
  return arr
}
// console.log(selectionSort([4,7,3,4,6,0,2,9,1,25]))



function insertionSort(arr){
  
  for (let i = 1; i < arr.length; i++) {
    console.log('one full iteration', arr)
    for (let j = i - 1; j >= 0; j--) {
      let comparable = j + 1
      console.log(arr[comparable], arr[j])
      if(arr[comparable] < arr[j]) {
        console.log("about to swap")
        let temp = arr[j]
        arr[j] = arr[comparable]
        arr[comparable] = temp
        console.log(arr)
      }
      else break
    }
  }
  return arr
}

console.log(insertionSort([4,7,3,4,6,0,2,9,1,25]))

// arr[i] = 7 
// arr[j] = 4

// arr[i] = 3
// arr[j] = 7
// temp = 7
// arrj[j] = 3
// arr[i] = 7