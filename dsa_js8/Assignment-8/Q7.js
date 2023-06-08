//COmplexity
//Time Complexity-O(n)
//Space Complexity-O(1)
// Returns decoded string for 'str'
let decodeString = function (s) {
  let stack = [],
    currStr = "",
    currDig = 0;
  // Traversing the string
  for (let i of s) {
    if (i === "[") {
      stack.push(currStr);
      stack.push(currDig);
      currStr = "";
      currDig = 0;
    } else if (i === "]") {
      let prevDig = stack.pop();
      let prevStr = stack.pop();
      currStr = prevStr + currStr.repeat(prevDig);
    } else if (!isNaN(i)) {
      currDig = currDig * 10 + parseInt(i);
    } else {
      currStr += i;
    }
    //console.log({i,currStr,currDig,stack});
  }
  return currStr;
};
console.log(decodeString("3[a]2[bc]"));
