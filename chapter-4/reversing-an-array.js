function reverseArray(arr) {
  var reversed = [];
  
  for (var i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  
  return reversed;
}

function reverseArrayInPlace(arr) {
  for (var a = 0; a < arr.length / 2; a++) {
    var temp = arr[a];
    arr[a] = arr[arr.length - 1 - a];
    arr[arr.length - 1 - a] = temp;
  }
  
  return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
