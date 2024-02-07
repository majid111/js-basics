const bottle = {
    name: 'apple',
    price: 50,
    color: 'White',
    isClean: false,
}
const subjects = {
    name: 'bangla',
    book: 'Amar Bangla Boi',
    teacher: 'Maksudur Rohman',
    "exam Marks": 100,
    chapters: ['golpo', 'kobita', 'sohoj path', 'uponnyas'],
    golpo: {
        golpo1: 'Moru Vashkor',
        golpo2: 'itihasher Kotha'
    }
}

// console.log(bottle.color);
bottle.color = 'transparent';
// console.log(bottle.color);
// console.log(subjects['exam Marks']);

const marks = 'exam Marks';
subjects[marks] = 200;
// console.log(subjects[marks]);

// //keys///////////////////////////////////////
// console.log(Object.keys(bottle));
// //Values----------------------------------
// console.log(Object.values(subjects));
// console.log(subjects.golpo.golpo1.length);
let golpo1 = subjects.golpo.golpo1;
let golpo2 = subjects.golpo.golpo2;

subjects.golpo = {
    golpo1: golpo1,
    golpo2: golpo2,
    golpo3: 'Hadiser golpo',
    golpo4: 'Quran er golpo',
    golpo5: 'Ashara mubasshira',
    golpo6: "adhunik Eshoper golpo",
}

// console.log(subjects.golpo);
delete subjects.golpo.golpo6;
// console.log(subjects.golpo);

const glass1 = {
    Brand: 'spencer',
    Model: 'spencer-001001',
    price: 450,
    glass: 'Bluecut',
    class: "premium",
    spring: true,
}
const glass2 = new Object(
    {
        Brand: 'spencer',
        Model: 'spencer-001002',
        price: 450,
        glass: 'Bluecut',
        class: "premium",
        spring: true,
    }
)

const glass3 = new Object();
const glass4 = Object.create({});
const glass5 = {};

// console.log(glass5);

for (let Obj in glass2) {
    Object.glass5 = {
        Obj,
    }
}
// console.log(glass2);

for (const prop in glass2) {
    // console.log(prop);
    // console.log(glass2[prop]);
}
const keys = Object.keys(glass2);
for (const aaaaa of keys) {

    // console.log(aaaaa+' : ' +glass2[aaaaa]);
}

///////////////////    js-object-tasks/////////////////
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
console.log(colors["golden rod"]);

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    'passenger capacity': 5,
};
console.log(car["passenger capacity"]);

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log(student.physics.marks);

let student1 = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

let objectLength = 0;
for (const length in student1) {
    objectLength++;
}
console.log(objectLength);

const bbb = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true,
}
let cc;
for(let s in bbb){
    console.log('Key: ',s," | ",'type: ',typeof(bbb[s]));
}



