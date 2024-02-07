// const country = `bangladesh`;
// const country2 = `Turkeye`;
// const country3 = 'Saudi Arabia';
// const country4 = `Iran`;
// const country5 = new String('Malaysia');

// let subject="Bangla";
// let book="bangla";

// // console.log(country.length);

// if(subject.toLowerCase===book.toLowerCase){
//     console.log("subject is matched");
// }
// else{
//     console.log("subject didn`t match");
// }

// let book1= `  English`,subject1=" English  ";

// if(subject1.trim===book1.trim){
//     console.log("subject is matched");
// }
// else{
//     console.log("subject didn`t match");
// }



// const ffff = "a a  aff af gd g gag g fag g ag fag g ga  gfag g fg af gfg";
// const aaaa = ffff.split(' ');
// console.log(aaaa);
// let aaa=aaaa.join(' ');
// console.log(aaa);


const sentence= 'I am a learner of web development'

let reverse='';
for(let letter of sentence){
    console.log(letter);
    reverse= letter+reverse;
}

console.log(reverse);

let reverse2='';
for(a=0;a<sentence.length;a++){
    // console.log(a);
    let b= sentence[a];
    reverse2= b+reverse2;
}

// console.log(reverse2);
let reverse3=sentence.split('').reverse().join('');

// console.log(reverse3);



