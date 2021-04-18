/* 

Link: https://www.codewars.com/kata/5583090cbe83f4fd8c000051

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

*/

function digitize(n) {
    const answer = []
    n=n.toString()
    for(let i=0;i<n.length;i++){
    answer.unshift(Number(n[i]))
    }return answer
  }