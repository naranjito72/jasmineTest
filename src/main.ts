// find match and skip the search

function findNumberAndSkip(arrNum: number[]): number[] {

  let numberContainer: number[] = [];
  let i: number = arrNum.length;
  let found: boolean = false;

  while ((i--) && found == false) {
    if (arrNum.indexOf(arrNum[i]) != i) {
      numberContainer.push(arrNum[i]);
      found = true;
    }
  }
  (numberContainer.length == 0) ? numberContainer = undefined : numberContainer;
  return numberContainer;
}
