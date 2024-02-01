
// Task 1 is here

let fruits = ["Mango", "Apple", "Guava", "Blackberry", "Jackfruit"];
let thirdIndexElement = fruits[2];
console.log(thirdIndexElement)
fruits[1]="jambura";
console.log(fruits)

// Task 2 is here
const touristDestinations=["Bandarban", "Rangamati","Sylhet"];
touristDestinations.push("Sundarban");
touristDestinations.push("Cox`s bazar", "Patuakhali");
touristDestinations.pop();
console.log(touristDestinations);

// task--3 is here
let books=["Bangla", "English", "Arabic","Urdu","Science","Mathematics","Social Science"];
if(books.includes("javascript book")===true){
    console.log("element is here")
}
else{
    console.log("element is not here")
}



// task-4 is here

let book;

console.log(Array.isArray(fruits))
console.log(Array.isArray(touristDestinations))
console.log(Array.isArray(books))
console.log(Array.isArray(book))


// task - 5 is here
let combine= touristDestinations.concat(fruits);
console.log(combine)