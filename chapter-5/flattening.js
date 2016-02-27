function flatten(arr) {
  var flattened = arr.reduce(function(a, b) {
    return a.concat(b);
  });
  
  return flattened;
}

var arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flatten(arrays));
