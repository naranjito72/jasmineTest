// here the function
// container to check
let arrContainer = [];
// text to return
let text = "";
// container to place repeated numbers
let arrRepeatedNum = [];
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
