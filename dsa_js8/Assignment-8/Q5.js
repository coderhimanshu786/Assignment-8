//Complexity
//Time Complexity-O(n)
//Space Complexity-O(1)

let chars = ["a","a","b","b","c","c","c"];
let n = chars.length;

var compress = function(chars, n) {
    // Handle edge case of empty input array
    if (!chars.length) {
      return 0;
    }
  
    // Initialize variables for iteration and compression
    let j = 0;                  // Current index in the compressed array
    let cur = chars[0];         // Current character being compressed
    let counter = 0;            // Counter for consecutive occurrences of cur
  
    // Iterate through input array
    for (let i = 0; i <= chars.length; i++) {
      // If the current character is the same as the previous character
      if (chars[i] === cur) {
        counter++;              // Increment the counter
      } else {
        // Otherwise, add the current character and count to the compressed array
        chars[j] = cur;         // Add the current character
        if (counter > 1) {
          const s = counter.toString();
          for (let k = 0; k < s.length; k++) {
            chars[++j] = s[k];  // Add each digit of the count
          }
        }
        j++;                    // Move to the next index in the compressed array
        cur = chars[i];         // Set the current character to the new character
        counter = 1;            // Reset the counter to 1 for the new character
      }
    }
  
    // Return the length of the compressed array
    return j;
  };

  console.log(compress(chars, n) + ` First 6 character is like ["a","2","b","2","c","3"]`);