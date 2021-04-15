/* 

Link: https://www.codewars.com/kata/57d06663eca260fe630001cc


To celebrate the start of the Rio Olympics (and the return of 'the Last Leg' on C4 tonight) this is an Olympic inspired kata.

Given a string of random letters, you need to examine each. Some letters naturally have 'rings' in them. 'O' is an obvious example, but 'b', 'p', 'e', 'A', etc are all just as applicable. 'B' even has two!! Please note for this kata you can count lower case 'g' as only one ring.

Your job is to count the 'rings' in each letter and divide the total number by 2. Round the answer down. Once you have your final score:

if score is 1 or less, return 'Not even a medal!'; if score is 2, return 'Bronze!'; if score is 3, return 'Silver!'; if score is more than 3, return 'Gold!';

Dots over i's and any other letters don't count as rings. */



function olympicRing(a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    switch (a[i]) {
      case `a`:
        count = count + 1;
        break;
      case `b`:
        count = count + 1;
        break;
      case `d`:
        count = count + 1;
        break;
      case `e`:
        count = count + 1;
        break;
      case `g`:
        count = count + 1;
        break;
      case `o`:
        count = count + 1;
        break;
      case `p`:
        count = count + 1;
        break;
      case `q`:
        count = count + 1;
        break;
      case `A`:
        count = count + 1;
        break;
      case `B`:
        count = count + 2;
        break;
      case `D`:
        count = count + 1;
        break;
      case `O`:
        count = count + 1;
        break;
      case `P`:
        count = count + 1;
        break;
      case `Q`:
        count = count + 1;
        break;
      case `R`:
        count = count + 1;
        break;
      default:
    }
  }
  switch (Math.floor(count / 2)) {
    case 2:
      return `Bronze!`;
      break;
    case 3:
      return `Silver!`;
      break;
    case 1:
      return `Not even a medal!`;
      break;
    case 0:
      return `Not even a medal!`;
      break;
    default:
      return `Gold!`;
  }
}