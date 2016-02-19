function arrayToList(arr) {
  var mainList = null;
  
  for (var i = arr.length - 1; i >= 0; i--) {
    var tempList = {
      value: arr[i],
      rest: null
    }
    
    // Detect whether this is the first element of the list
    if (mainList) {
      mainList = prepend(tempList, mainList);
    } else {
      mainList = tempList;
    }
  }
  
  return mainList;
}

function listToArray(list) {
  var arr = [];
  
  while (true) {
    arr.push(list.value);
    list = list.rest;
    
    // If list is null, break out of while loop
    if (!list) {
      break;
    }
  }
  
  return arr;
}

function prepend(el, list) {
  el.rest = list;
  return el;
}

function nth(n, list) {
  if (n == 1) {
    return list.value;
  } else {
    return nth(n - 1, list.rest);
  }
}

console.log(arrayToList([1, 2, 3]));
console.log(listToArray(arrayToList([1, 2, 3])));
console.log(nth(3, arrayToList([1, 2, 3])));
