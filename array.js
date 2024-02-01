const numbers = [1, 22, 33, 44, 55, 66, 77, 89, 99];


// const fourth=numbers[2]

// // console.log(numbers.length)
// // console.log(numbers)
// // console.log(numbers[4])
// for(const num of numbers){
//     console.log(num)
// }
// console.log('fourth number ',fourth)
let a, b, c, d, f, i, n, g, h, j, k, l, e, ee, eee;

let v = ['a', 'b', 'trdf', 'sdf', 'dfgs', 'yuio', 'tuyer', 'setgyuih', 'werf'];

n = v.length;
a = v[1];
b = v[2];
c = v[3, 4];
// console.log(a+b+c)
// console.log(a+''+b+''+c)
// console.log(a+' '+b+' '+c)
// v[1]=11;
// v[0]='naekml';
// console.log(v)
v.push(12, 1234, 4567, 456, 789);
v.pop();
v.unshift(12, 1234, 4567, 456, 789);
// console.log(v);
v.shift();

// console.log(v);
// console.log();
j = 1234;
// if (v.includes(j) === true) {
//     console.log("index of value: ", v.indexOf(j))
// }
// else {
//     console.log("false")
// }
console.log(Array.isArray(v))
console.log("length of array is ", v.length)
if (v.includes(j)===true){
    console.log(v.indexOf(j))
}
else{
    console.log("False")
}

console.log(v.join("_"))