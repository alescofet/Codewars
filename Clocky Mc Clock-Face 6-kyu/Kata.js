/* 

Link: https://www.codewars.com/kata/59752e1f064d1261cb0000ec

Due to lack of maintenance the minute-hand has fallen off Town Hall clock face.

And because the local council has lost most of our tax money to a Nigerian email scam there are no funds to fix the clock properly.

Instead, they are asking for volunteer programmers to write some code that tell the time by only looking at the remaining hour-hand!

What a bunch of cheapskates!

Can you do it?

                                        <----------------KATA---------------->

Given the angle (in degrees) of the hour-hand, return the time in HH:MM format. Round down to the nearest minute.

Examples
12:00 = 0 degrees
03:00 = 90 degrees
06:00 = 180 degrees
09:00 = 270 degrees
12:00 = 360 degrees

*/

let minutes=0
let hours=0
const getTime = (angle)=>{
hours = Math.floor((angle*2)/60)
minutes = Math.floor((angle*((3*60)/90)) % 60)
}
var whatTimeIsIt = function(angle) {
  getTime(angle)
  if(hours === 0 && minutes <10){return (`12:0${minutes}`)}
  if(hours === 0 && minutes >=10){return (`12:${minutes}`)}
  if(hours<10 && minutes <10){return (`0${hours}:0${minutes}`)}
  if(hours>=10 && minutes <10){return (`${hours}:0${minutes}`)}
  if(hours<10 && minutes >=10){return (`0${hours}:${minutes}`)}
  if(hours>=10 && minutes >=10){return (`${hours}:${minutes}`)}
}