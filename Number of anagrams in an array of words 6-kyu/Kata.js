/* 

Link: https://www.codewars.com/kata/587e18b97a25e865530000d8

An anagram is a word, a phrase, or a sentence formed from another by rearranging its letters. An example of this is "angel", which is an anagram of "glean".

Write a function that receives an array of words, and returns the total number of distinct pairs of anagramic words inside it.

Some examples:

There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]

*/

function anagramCounter(wordsArray) {
  let counter = 0;
  wordsArray.forEach((word1) => {
    wordsArray.forEach((word2) => {
      if (word1 !== word2) {
        if (word1.split(``).sort().join() === word2.split(``).sort().join()) {
          counter++;
        }
      }
    });
  });
  return counter / 2;
}
