/* 

Link: https://www.codewars.com/kata/605ae9e1d2be8a0023b494ed

There is a narrow hallway in which people can go right and left only. When two people meet in the hallway, by tradition they must salute each other. People move at the same speed left and right.

Your task is to write a function that, given a string representation of people moving in the hallway, will count the number of salutes that will occur.
Note: 2 salutes occur when people meet, one to the other and vice versa. */

function countSalutes(hallway) {
  let count = 0;
  for (let i = 0; i < hallway.length; i++) {
    if (hallway[i] === `>`) {
      for (let k = i; k < hallway.length; k++) {
        if (hallway[k] === `<`) {
          count = count + 2;
        }
      }
    }
  }
  return count;
}