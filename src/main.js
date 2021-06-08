// find match and skip the search
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
