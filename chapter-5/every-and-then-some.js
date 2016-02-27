function every(array, func) {
  var res = true;
  
  array.forEach(function(el) {
    res = func(el);
  });
  
  return res;
}

function some(array, func) {
  for (var i = 0; i < array.length; i++) {
    if (func(array[i])) {
      return true;
    }
  }
  
  return false;
}

console.log(every([NaN, NaN, NaN], isNaN));   // → true
console.log(every([NaN, NaN, 4], isNaN));     // → false
console.log(some([NaN, 3, 4], isNaN));        // → true
console.log(some([2, 3, 4], isNaN));          // → false
