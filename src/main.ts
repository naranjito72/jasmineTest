// find match and skip the search
const arrOne = [1, 2, 3, 4, 5, 6, 1, 2, 3];
let numberContainer: number[] = [];

function findNumberAndSkip(arrNum: number[]): number[] {

  let i: number = arrNum.length;
  let found: boolean = false;

  while ((i--) && found == false) {
    if (arrNum.indexOf(arrNum[i]) != i) {
      numberContainer.push(arrNum[i]);
      found = true;
    }
  }
  return numberContainer;
}
findNumberAndSkip(arrOne);
