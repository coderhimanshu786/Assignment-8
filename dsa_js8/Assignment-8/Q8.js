//COmplexity
//Time Complexity-O(n)
//Space Complexity-O(1)

// Function that returns true if the string can be made equal after one swap
let buddyStrings = function (s, goal) {
    //initialize from start
  let count = 0;
  let map = new Map();
//treverse over the two string
  for (let i = 0; i < goal.length; i++) {
    //if i = j if not equal then count inrenment
    if (goal[i] !== s[i]) count++;

    map.set(s[i], s[i]);
  };

  return ((count === 0 && map.size !== s.length) ||
    //destructuring wwith sort then join it..
    (count === 2 && [...s].sort().join("") === [...goal].sort().join("")));
};
//print
console.log(buddyStrings("ab", "ba"));