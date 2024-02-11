// const letter = 'Count how many times a string has the letteraaaaaaa';
// let letterCount = 0;
// for (i = 0; i < letter.length; i++) {
//     if (letter[i] === 'a') {
//         letterCount++;
//     }
// }
// console.log(letterCount);
// ///////////////////////////////////
// const letter2 = 'Count how many times a string has the letteraaaaaaaAAAAA';
// let letterCount2 = 0;
// for (i = 0; i < letter2.length; i++) {
//     if (letter2[i] === 'a'|| letter2[i] === 'A') {
//         letterCount2++;
//     }
// }
// console.log(letterCount2);
// //////////////////////////////////////////////////
// const letter3 = 'Count how many times a string has the letteraaaaaaaAAAAA';
// let letterChanged = letter3.toLowerCase();
// let message,a,e,ii,o,u;

// for (x = 0; x < letterChanged.length; x++) {
//     if( letterChanged[x]==='a'){
//         a=true;
//     }
//     else if( letterChanged[x]==='e'){
//         e=true;
//     }
//     else if( letterChanged[x]==='i'){
//         ii=true;
//     }
//     else if( letterChanged[x]==='o'){
//         o=true;
//     }
//     else if( letterChanged[x]==='u'){
//         u=true;
//     }
// }
// if (a===true && e===true && ii===true && o===true && u===true) {
//     message="The sentence has all vowels"
// }
// else{
//     message="The sentence hasn't all vowels"
// }
// console.log(message);
////////////////////////////////////////////////////////////////////////////////
const letter5='If a given string has either x, replace x by y. if the given string has X, replace it by Y.';
letter5.split("");
let LetterArray=letter5.split("");
let solveLetter=[];
for(let eachLetter of LetterArray){
    if(eachLetter==='x'){
        solveLetter.push('X');
    }
    else if(eachLetter==='y'){
        solveLetter.push('Y');
    }
    else{
        
        solveLetter.push(eachLetter);
    }
}
let solveLetter2=solveLetter.join("");
console.log(solveLetter2);






///////////////////////////////////////////////////////////////////////////////
// const letter4 = 'Count how many times a string has the letter';
// let saf='afasfa';
// saf2=saf.split('');
// saf3=letter4.split(' ');
// let correctionContainer=[];
// for(let element of saf3){
//     let length=element.length;
//    let firstLetter=element[0].toUpperCase().concat(element.slice(1,length));
//    console.log(firstLetter);
//    correctionContainer.push(firstLetter);
   
// }
// let finalWord=correctionContainer.join(" ");

// console.log(correctionContainer);
// console.log(finalWord);




