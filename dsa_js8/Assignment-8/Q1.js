//Approch in solution
//COmplexity
//Time Complexity-O(n)
//Space Complexity-O(1)

//function to return the lowest ASCII sum of deleted characters where s1 and s2 are the sums..
let minimumDeleteSum = function (s1, s2) {
  //intialize s1 and s2 to split into string
  s1 = s1.split("");
  s2 = s2.split("");
  //to find the length of s1 and s2
  const s1Len = s1.length,
    s2Len = s2.length;
    //to fill empty space
  const dp = new Array(s1Len).fill(-1).map(() => {
    //then return anew array 
    return new Array(s2Len).fill(-1);
  });
  //initialize i and j at start then cost = 0  in the nested object
  const solve = (i = 0, j = 0) => {
    let cost = 0;
    //check if i equal to length of s1 then j < length of s2 then return cost
    if (i == s1Len) {
      while (j < s2Len) cost += s2[j++].charCodeAt(0);
      return cost;
    }
//check j is equal to s2len then i < s1lenth then return cost
    if (j == s2Len) {
      while (i < s1Len) cost += s1[i++].charCodeAt(0);
      return cost;
    }
//if dp not equal to null return dp[i][j]
    if (dp[i][j] != -1) return dp[i][j];
//s1[i] equal s2[2] return increment
    if (s1[i] == s2[j]) return solve(i + 1, j + 1);
//inititialixe charter code at very first letter in del and add then fnd minimum value
    let del = solve(i + 1, j) + s1[i].charCodeAt(0);
    let add = solve(i, j + 1) + s2[j].charCodeAt(0);
//then return min among del and add..
    return (dp[i][j] = Math.min(add, del));
  };
//then return solve
  return solve();
};
console.log(minimumDeleteSum("sea", "eat"));
