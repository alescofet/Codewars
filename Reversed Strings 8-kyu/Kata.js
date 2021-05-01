/* 

Link: https://www.codewars.com/kata/5168bb5dfe9a00b126000018

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
*/

function solution(str){
    let arr = Array.from(str)
    return arr.reverse().join(``)
  }