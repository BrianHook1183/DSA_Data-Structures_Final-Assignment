/**
 * A palindrome is a word, phrase, or number that is spelled the same forward and backward.
 * For example, “dad” is a palindrome; “A man, a plan, a canal: Panama” is a palindrome if you take out the spaces and ignore the punctuation;
 * and 1,001 is a numeric palindrome.
 *
 * Use a stack to determine whether or not a given string is a palindrome.
 *
 * The implementation should have O(n) performance.
 *
 * @param text
 *  a possibly empty string that may be a palindrome.
 */

const Stack = require("../linked-list/stack");

// TODO: Write an O(n) algorithm that uses a stack to determine whether the given input text is palindrome or not.
function isPalindrome(text) {
  text = text.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  if (text.length === 0) return false;
  if (text.length === 1) return true;

  const stack = new Stack();

  const firstHalfLength = Math.floor(text.length / 2);

  if (text.length % 2) {
    text = text.slice(0, firstHalfLength) + text.slice(firstHalfLength + 1);
  }

  for (let i = 0; i < text.length; i++) {
    if (i < firstHalfLength) {
      stack.push(text[i]);
    }
    if (i >= firstHalfLength) {
      const value = stack.pop();
      if (value !== text[i]) {
        return false;
      }
    }
  }

  return true;
}

module.exports = isPalindrome;
