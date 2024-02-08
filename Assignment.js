const a = 'aaaa';
// console.log(typeof a);
// if (typeof a === "string") {
//     console.log('Value is string');
// }
// else {
//     console.log('Value is not a string');
// }

// const b = ['aaaa', 'aaf', 1, 2, 4, -4, 444,];
// console.log(typeof b);
// if (Array.isArray(b) === true) {
//     console.log('Value is array');
// }
// else {
//     console.log('Value is not a array');
// }

///////////////////////////////////

function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        return "Invalid Number";
    }
    else {
        let totalTaka = 120 * ticketSale;
        const totalCost = 1 * 500 + 8 * 50;
        let remaining = totalTaka - totalCost;
        return remaining;
    }
}

///////////////////////////////

function checkName(name) {
    if (typeof name === "string") {
        const name2 = name.toLowerCase();
        const lastWord = name2.length - 1;
        if (name2[lastWord] === 'a' || name2[lastWord] === 'e' || name2[lastWord] === 'i' || name2[lastWord] === 'o' || name2[lastWord] === 'u' || name2[lastWord] === 'w' || name2[lastWord] === 'y') {

            return "Good Name";
        }
        else {
            return "Bad Name";
        }

    }
    else {
        return "Invalid";
    }
}

/////////////////////////////////////

function deleteInvalids(array) {
    if (Array.isArray(array) === true) {
        const outputArray = [];
        for (i = 0; i < array.length; i++) {
            if (!isNaN(array[i]) && typeof array[i] === 'number') {
                outputArray.push(array[i]);
            }

        }
        return outputArray;
    }
    else {
        return "Invalid Array";
    }
}

///////////////////////////////////////////////////////////////////

function password(obj) {
    let i = 0;
    for (const item in obj2) {
        i++;
    }
    let siteName1=obj.siteName[0].toUpperCase();
    let siteNameRest= obj.siteName.split("");
    siteNameRest.shift();
    siteNameRest.unshift(siteName1);
    let siteFinal=siteNameRest.join("");

    let year=obj.birthYear;
    let yearStr=year.toString();
    let password =siteFinal+"#"+obj.name+"@"+yearStr;

    if (i<3 || yearStr.length!==4) {
        return "Invalid";
    }
    else {
        return password;        
    }
}
///////////////////////////
function monthlySavings(arr, livingCost) {
    if (Array.isArray(arr) === true && !isNaN(livingCost) && typeof livingCost === 'number') {
        let totalSavings = 0, tax = 0, totalIncome = 0;
        for (const element of arr) {
            totalIncome = totalIncome + element;
            if (element >= 3000) {
                tax = element * .2;
            }
        }
        totalSavings = totalIncome - tax - livingCost;
        if (totalSavings >= 0) {
            return totalSavings;
        }
        else {
            return 'earn More';
        }
    }
    else {
        return "invalid input";
    }
}


const array1 = [21321423, 143423, 512, 51235, 5145, 646, 6347];

const obj2 = {
    name: 'kolimuddin',
    birthYear: 1999,
    siteName: 'google'

}

console.log(password(obj2));

// let bb = ['1', { num: 2 }, NaN];
// let bbb = [1, 2, -3];
// let bbbb = [1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];
// let bbbbb = { num: [1, 2, 3] };
// console.log(deleteInvalids(a));
// deleteInvalids(a);

// const objj = {
//     anfa: "afdaf",
//     afdfa: "ewafdf",
//     asdfa: 112
// }


// console.log(i);
// const name2='name';
// const firstLetterOfSiteName=obj2.siteName[0];
// obj2.siteName.replace(siteName[0], G)
// console.log(firstLetterOfSiteName);
// console.log(obj2.siteName);
// console.log(obj2[name2]);
// console.log(Object.values(objj));
// console.log(Object.values(objj)[0][0]);