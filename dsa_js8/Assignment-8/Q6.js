//COmplexity
//Time Complexity-O(n)
//Space Complexity-O(1)
//Approch
//-Build a hash map consists of characters and their counts. Save the # of unique characters as uniqueChars
//-Iterate the input s using 2 pointers left and right. Make adjustments in hash and uniqueChars
//-Keep expanding the right pointer. When the desired searching length is reached, we can start shrinking left pointer as well.
//-Unlike other sliding window problems, left pointer, at max, would only move 1 position.

let findAnagrams = function (s, p) {
  let hash = {},
    uniqueChars = 0;
  for (let c of p) {
    if (hash[c] == null) {
      uniqueChars++;
      hash[c] = 1;
    } else {
      hash[c]++;
    }
  }

  let res = [];
  let left = 0,
    right = 0;
  for (right; right < s.length; right++) {
    if (hash[s[right]] != null) hash[s[right]]--;
    if (hash[s[right]] == 0) uniqueChars--;
    if (uniqueChars == 0) res.push(left);
    if (right - left + 1 == p.length) {
      if (hash[s[left]] != null) hash[s[left]]++;
      if (hash[s[left++]] == 1) uniqueChars++;
    }
  }
  return res;
};

console.log(findAnagrams("cbaebabacd", "abc"));
