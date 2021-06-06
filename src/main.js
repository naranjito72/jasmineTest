// container to check
let arrContainer = [];
// text to return
let text = "";
// container to place repeated numbers
let arrRepeatedNum = [];
// as done yesterday
function findSameNumber(arrNum) {
    // find duplicated numbers
    for (let _i = 0; _i < arrNum.length; _i++) {
        // check every number
        (arrContainer.includes(arrNum[_i]) == true) ? arrRepeatedNum.push(arrNum[_i]) : arrContainer.push(arrNum[_i]);
    }
    // show the number reaped
    (arrRepeatedNum.length > 0) ? text = `The function finds ${arrRepeatedNum} as being the duplicated` :
        text = 'The function indicates no duplicate have been found';
    // clean the arr
    cleanArr();
    // return
    return text;
}
function cleanArr() {
    arrRepeatedNum = [];
    arrContainer = [];
}
/************************** as Soon as you find one skip the rest *********************************/
function findAdnSkiprest(arrNum) {
    //  a true friend
    let found = false;
    // starting point
    let i = 0;
    // I REALLY need to learn this by heart!!!
    while (!found && i < arrNum.length) {
        found = arrContainer.includes(arrNum[i]);
        // use i as reference to iterate through the arr
        if (found == false) {
            found;
            arrContainer.push(arrNum[i]);
            text = 'The function indicates no duplicate have been found';
        }
        // if not you keep increasing
        i++;
    }
    if (found == true) {
        text = `The function finds ${arrNum[i - 1]} as being the duplicated`;
    }
    console.log(`Nuria kasparov. ${text}`);
    return text;
}
/*************************  With new Set ********************************/
// One IN one OUT
function findSameNumberTwo(arrNum) {
    // don't touch the original arr!
    let copyArr = makeCopyArr(arrNum);
    copyArr = orderNumbers(copyArr);
    let result = filterArr(copyArr);
    // add the matching ones into a new Set making it an array and no an object
    result = [...new Set(result)];
    // return the text
    (result.length > 0) ? text = `The function finds ${result.map((e) => e)} as being the duplicated` :
        text = 'The function indicates no duplicate have been found';
    return text;
}
// Helper Functions
// we make a copy of the original array
// https://medium.com/@jeanpan/javascript-splice-slice-split-745b1c1c05d2
const makeCopyArr = (arrNum) => arrNum.slice();
// Order them
// https://dev.to/lberge17/js-array-methods-filter-map-reduce-and-sort-2gcn
const orderNumbers = (arrNum) => arrNum.sort();
// filter them
// I tell the function to compare each element of the copied array with its partner next to it by adding one to the index
const filterArr = (arrNum) => arrNum.filter((elemnt, index) => arrNum[index] == arrNum[index + 1]);
// remember question Damien about the no use of element in this particular case
/************************************Never tried this before, but just thinking about encapsulation ******************************************/
// new Object
const findSameNumberObj = {
    // methods
    makeCopyArr(arrNum) {
        return arrNum.slice();
    },
    orderNumbers(arrNum) {
        return arrNum.sort();
    },
    filterArr(arrNum) {
        return arrNum.filter((element, index) => arrNum[index] == arrNum[index + 1]);
    },
    makeNewSet(arrNum) {
        return [...new Set(arrNum)];
    },
    // tostring is a js native method that doesn't take any parameter
    myString(arrNum) {
        let checkMe = false;
        let text = ``;
        (arrNum.length > 0) ? checkMe = true : checkMe = false;
        if (checkMe == true) {
            let mapArr = arrNum.map((e) => e);
            text = `The function finds ${mapArr} as being the duplicated`;
        }
        else {
            text = 'The function indicates no duplicate have been found';
        }
        console.log(text);
        return text;
    }
};
// main function
function findSameNumberThree(arrNum) {
    let copyArr = [];
    copyArr = findSameNumberObj.makeCopyArr(arrNum);
    copyArr = findSameNumberObj.orderNumbers(copyArr);
    copyArr = findSameNumberObj.filterArr(copyArr);
    findSameNumberObj.myString(copyArr);
}
