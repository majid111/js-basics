/***                While loop           */

/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

/*printing 60 times*/

// let a=1;
// while(a<=60){
//     console.log("I will invest at least 6 hrs every single day for next 60 days!", a);
//     a++;
// }


/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*odd numbers*/

// let b=61;
// while(b<=100){
//     if(b%2===1){
//         console.log(b);
//     }
//     b++;
// }

//even numbers
// let c=78;
// while(c<=98){
//     if(c%2===0){
//         console.log(c);
//     }
//     c++;
// }

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*odd numbers and sum*/

// let d=81;
// let sum=0;
// while(d<=131){
//     if(d%2===1){
//         console.log(d);
//         sum += d;
//     }
//     d++;
// }
// console.log(sum);

//even numbers and sum
// let e=206;
// let sum1=0;
// while(e<=311){
//     if(e%2===0){
//         console.log(e);
//         sum1 += e;
//     }
//     e++;
// }
// console.log(sum1);
//-----------------------------------------------------------------------------

/***

As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

 */

// let f=1;
// let g=0;
// while(f<=10){
//     g=5*f;
//     console.log("5 X ",f,"=",g);
//     f++;
// }
//-------------------------------------------------------------------------

/***

Implement a countdown timer that counts down from 21 to 15.

 */
// let h=21;
// while(h>=15){
//     console.log(h);
//     h--;
// }
//-----------------------------------------------------------------------------

/***                for loop           */
/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */
// for(aa=1;aa<=60;aa++){
//     console.log("I will invest at least 6 hrs every single day for next 60 days!",aa)
// }
//---------------------------------------------------------------------------------
/***

Subtask-1:

Find all the odd numbers from 61 to 100.

Subtask-2:

Find all the even numbers from 78 to 98.

 */
//for odd numbers
// for(bb=61;bb<=100;bb++){
//     if(bb%2===1){
//         console.log(bb);
//     }
// }

//for even Numbers
// for(cc=78;cc<=98;cc++){
//     if(cc%2===0){
//         console.log(cc);
//     }
// }
//---------------------------------------------------------------------------

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */
// let sum3=0;
// for(dd=91;dd<=129;dd++){
//     if(dd%2===1){
//         console.log(dd);
//         sum3 +=dd;
//     }
// }
// console.log(sum3);
//-----------------------------------------------------------------

// let sum4=0;
// for(ee=51;ee<=85;ee++){
//     if(ee%2===0){
//         console.log(ee);
//         sum4 +=ee;
//     }
// }
// console.log(sum4);
//--------------------------------------------------

/***

Generate a multiplication table for number 9

 */
// for(ff=1;ff<=10;ff++){
//     let gg=ff*9;
//     console.log(ff," x 9 ", "= ", gg);

// }

//------------------------------------------------------------


/***

Implement a countdown timer that counts down from 81 to 65.

 */

// for(hh=81;hh>=65;hh--){
//     console.log(hh);
// }

//////////////////////////////////////////////////////////////////

/***            Break        */
// for(j=1;j<=200;j++){
//     if(j===100){
//         break
//     }
//     console.log(j);
// }
////-------------------------------------------------------

/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
// let sum4=0;
// for(k=1;k<=10000000;k++){
//     sum4 +=k;
//     console.log(sum4);
//     if(sum4>=100){
//         break;
//     }
// }
//---------------------------------------------------------
/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/


//---------------------------------------------------------------------

/**                      continue */

/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/
// for(m=1;m<=40;m++){
//     if(m%2===1){
//         continue;
//     }
//     console.log(m);
// }
//-----------------------------------------------

/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/
// for(n=55;n<=85;n++){
    
//     if(n%2===1){
//         if(n%5===0){
//             continue;
//         }
//         console.log(n);
//     }
// }