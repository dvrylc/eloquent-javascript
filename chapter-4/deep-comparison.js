function deepEqual(a, b) {
  var equal = false;
  
  if (typeof a === "object" && typeof b === "object" && a !== null && b !== null) {
    var objEqual = false;
    
    for (var k in a) {
      if (k in b) {
        objEqual = deepEqual(a[k], b[k]);
      }
    }
    
    return objEqual;
  } else {
    equal = a === b ? true : false;
  }
  
  return equal;
}

// Numbers
console.log(deepEqual(1, 1));         // true
console.log(deepEqual(1, 2));         // false

// Strings
console.log(deepEqual("a", "a"));     // true
console.log(deepEqual("a", "b"));     // false

// Type-coercion tests
console.log(deepEqual(0, false));     // false
console.log(deepEqual(0, "0"));       // false

// Recursive object and null tests
var x = {
  a: 1,
  b: 2
}
var y = {
  a: 1,
  b: 3
}
console.log(deepEqual(x, x));         // true
console.log(deepEqual(x, y));         // false
console.log(deepEqual(x, null));      // false
