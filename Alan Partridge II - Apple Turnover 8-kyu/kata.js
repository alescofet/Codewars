/* 

Link: https://www.codewars.com/kata/580a094553bd9ec5d800007d

Your job is simple, if (x) squared is more than 1000, return 'It's hotter than the sun!!', else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'.

X will be either a number or a string. Both are valid.
 */


function apple(x) {
  if (Math.pow(x, 2) >= 1000) {
    return `It\'s hotter than the sun!!`;
  } else {
    return `Help yourself to a honeycomb Yorkie for the glovebox.`;
  }
}