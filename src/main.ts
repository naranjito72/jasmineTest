// here the function
// container to check
let arrContainer: any[] = [];
// text to return
let text: string = "";
// container to place repeated numbers
let arrRepeatedNum: any[] = [];
// as done yesterday
function findSameNumber(arrNum): string{
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

function cleanArr(){
  arrRepeatedNum = [];
  arrContainer   = [];
}
/*************************  With new Set ********************************/
// One IN one OUT
function findSameNumberTwo(arrNum: number[]): any {
  // don't touch the original arr!
  let copyArr: number[] = makeCopyArr(arrNum);
  copyArr               = orderNumbers(copyArr);
  let result: number[]  = filterArr(copyArr);
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
const makeCopyArr = (arrNum: number[]) => arrNum.slice();
// Order them
// https://dev.to/lberge17/js-array-methods-filter-map-reduce-and-sort-2gcn
const orderNumbers = (arrNum: number[]) => arrNum.sort();
// filter them
// I tell the function to compare each element of the copied array with its partner next to it by adding one to the index
const filterArr = (arrNum: number[]) => arrNum.filter((elemnt, index) => arrNum[index] == arrNum[index + 1]);
// remember question Damien about the no use of element in this particular case

/************************************Never tried this before, but just thinking about encapsulation ******************************************/

// new Object
const findSameNumberObj = {

// methods
makeCopyArr(arrNum: number[]): number[]{
return  arrNum.slice();
},

orderNumbers(arrNum: number[]): number[]{
return  arrNum.sort();
},

filterArr(arrNum: number[]): number[]{
  return arrNum.filter((element, index) => arrNum[index] == arrNum[index + 1]);
},

makeNewSet(arrNum: number[]): number[]{
  return [...new Set(arrNum)];
},
// tostring is a js native method that doesn't take any parameter
myString(arrNum: number[]): any {
  let checkMe: boolean = false;
  let text: string = ``;
  (arrNum.length > 0) ? checkMe = true : checkMe = false;
  if(checkMe == true){
    let mapArr: any = arrNum.map((e) => e);
    text = `The function finds ${mapArr} as being the duplicated`;
  } else {
      text = 'The function indicates no duplicate have been found';
  }
  console.log(text);
  return text;
  }
}
// main function
function findSameNumberThree(arrNum:number[]) {
let copyArr: number[] = [];
copyArr = findSameNumberObj.makeCopyArr(arrNum);
copyArr = findSameNumberObj.orderNumbers(copyArr);
copyArr = findSameNumberObj.filterArr(copyArr);
findSameNumberObj.myString(copyArr);
}
