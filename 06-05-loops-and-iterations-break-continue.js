// breakContinue.js

// Function 1
function findElement(arr, val) {
  // Implement a function to find the index of 'val' in the given array 'arr'.    
  let index = -1
  
  for (let i = 0; i < arr.length; i++){
    if(arr[i] == val){
      index = i
      break
    }
  }

  return index
}

// Function 2
function sumUntilStop(arr) {
  // Implement a function to calculate the sum of numbers in the array until encountering 0.
  let sum = 0

  for(let i = 0; i < arr.length; i++){
    if(arr[i] == 0){
      break
    }
    sum += arr[i]
  }

  return sum
}

// Function 3
function skipStrings(arr) {
  // Implement a function to skip strings in the given array and return the sum of numbers.
  let sum = 0

  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] == 'string'){
      continue
    }
    sum += arr[i]
  }
  return sum
}

// Function 4
function countVowels(str) {
  // Implement a function to count the number of vowels in the given string.
  let vowelsCount = 0
  let vowels = 'aeiouyAEIOUY'
  
  for(let i = 0; i < str.length; i++){
    if(vowels.indexOf(str[i]) == -1){
      continue
    }
    vowelsCount++
  }

  return vowelsCount
}

module.exports = {
  findElement,
  sumUntilStop,
  skipStrings,
  countVowels,
};
