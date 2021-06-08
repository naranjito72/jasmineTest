// find match and skip the search
const arrOne = [1, 2, 3, 4, 5, 6, 1, 2, 3];
function findNumberAndSkip(arrNum) {
    let numberContainer = [];
    let i = arrNum.length;
    let found = false;
    while ((i--) && found == false) {
        if (arrNum.indexOf(arrNum[i]) != i) {
            numberContainer.push(arrNum[i]);
            found = true;
        }
    }
    (numberContainer.length == 0) ? numberContainer = undefined : numberContainer;
    return numberContainer;
}
findNumberAndSkip(arrOne);
