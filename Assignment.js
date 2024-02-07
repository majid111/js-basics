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
       const name2=name.toLowerCase();
       const lastWord=name2.length-1;
       if(name2[lastWord]==='a' || name2[lastWord]==='e' || name2[lastWord]==='i' || name2[lastWord]==='o' || name2[lastWord]==='u' || name2[lastWord]==='w' || name2[lastWord]==='y'){

           return "Good Name";
       }
       else{
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
            const outputArray=[ ];
            for(i=0;i<array.length;i++){
                if(!isNaN(array[i]) && typeof array[i]==='number'){
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

        


        let bb=['1' , {num:2} , NaN ] ;
        let bbb=[ 1 , 2 , -3 ] ;
        let bbbb=[1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];
        let bbbbb={num: [ 1 , 2 , 3 ]} ;
console.log(deleteInvalids(a));
// deleteInvalids(a);