var size = 8;
var output = "";

for (var i = 0; i < size; i++) {
  // Initiate variables for this line 
  var line = "",
      char1 = "",
      char2 = "";
  
  // Decide A and B chars
  if (i % 2 == 0) {
    char1 = " ";
    char2 = "#";
  } else {
    char1 = "#";
    char2 = " ";
  }
  
  // Craft this line
  while (line.length != size) {
    line += char1;
    
    if (line.length != size) {
      line += char2;
    }
  }
  
  // Write to main output string
  output += line
  
  // Determine newline
  if (i + 1 != size) {
    output += "\n";
  }
}

console.log(output);
