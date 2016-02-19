function range(start, end, step) {
  var numbers = [];
  
  if (typeof step === "undefined") {
    step = start <= end ? 1 : -1
  }
  
  if (start <= end) {
    for (var i  = start; i <= end; i += step) {
      numbers.push(i);
    }
  } else {
    for (var i  = start; i >= end; i += step) {
      numbers.push(i);
    }
  }
  
  return numbers;
}

function sum(arr) {
  var sum = 0;
  
  arr.forEach(function(el) {
    sum += el;
  });
  
  return sum;
}

console.log(sum(range(1, 10)));
console.log(sum(range(1, 10, 2)));
console.log(sum(range(5, 2)));
console.log(sum(range(5, 2, -2)));
