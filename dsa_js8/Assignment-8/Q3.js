

function remAnagram(word1, word2)
{
    // make hash array for both string and calculate frequency of each character
    var count1 = Array.from({length: 26}, (_, i) => 0);
    var count2 = Array.from({length: 26}, (_, i) => 0);
 
    // count frequency of each character
    // in first string
    for (i = 0; i < word1.length ; i++)
        count1[word1.charAt(i).charCodeAt(0) -'a'.charCodeAt(0)]++;
 
    // count frequency of each character in second string
    for (i = 0; i < word2.length ; i++)
        count2[word2.charAt(i).charCodeAt(0) -'a'.charCodeAt(0)]++;
 
    // traverse count arrays to find number of characters to be removed
    var result = 0;
    for (i = 0; i < 26; i++)
        result += Math.abs(count1[i] -
                           count2[i]);
    return result;
}
 
// Driver program to run the case
var word1 = "sea", word2 = "eat";
console.log(remAnagram(word1, word2));