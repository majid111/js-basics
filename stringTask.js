const letter = 'Count how many times a string has the letteraaaaaaa';
let letterCount = 0;
for (i = 0; i < letter.length; i++) {
    if (letter[i] === 'a') {
        letterCount++;
    }
}
console.log(letterCount);
///////////////////////////////////
const letter2 = 'Count how many times a string has the letteraaaaaaaAAAAA';
let letterCount2 = 0;
for (i = 0; i < letter2.length; i++) {
    if (letter2[i] === 'a'|| letter2[i] === 'A') {
        letterCount2++;
    }
}
console.log(letterCount2);
//////////////////////////////////////////////////
const letter3 = 'Count how many times a string has the letteraaaaaaaAAAAA';
let letterChanged = letter3.toLowerCase();
let message,a,e,ii,o,u;

for (x = 0; x < letterChanged.length; x++) {
    if( letterChanged[x]==='a'){
        a=true;
    }
    else if( letterChanged[x]==='e'){
        e=true;
    }
    else if( letterChanged[x]==='i'){
        ii=true;
    }
    else if( letterChanged[x]==='o'){
        o=true;
    }
    else if( letterChanged[x]==='u'){
        u=true;
    }
}
if (a===true && e===true && ii===true && o===true && u===true) {
    message="The sentence has all vowels"
}
else{
    message="The sentence hasn't all vowels"
}
console.log(message);


const letter4 = 'Count how many times a string has the letter';
let saf='afasfa';
saf2=saf.split('');
saf3=letter4.split(' ');
console.log(saf2,saf3);