
describe('findNumberAndSkip', function(){
  it('Defines findNumberAndSkip', function(){
    expect(typeof findNumberAndSkip).toBe('function');
  });
  it('Retuns only one value inside of an array if in the array of numbers there is only one match', function(){
    let arrNum = [1, 3, 10, -1, 0, 3];
    let numberContainer = [];
    expect(findNumberAndSkip(arrNum)).toEqual([3]);
  });
  it('Retuns only one value inside of an array even if in the array of numbers are more than one match', function(){
    let arrNum = [1, 3, 2, 10, -1, 0, 3, 2];
    let numberContainer = [];
    expect(findNumberAndSkip(arrNum)).toEqual([2]);
  });
  it('Returns "undefined" if parameter is an empty array', function(){
     let arrNum = [];
    expect(findNumberAndSkip(arrNum)).toEqual(undefined);
  });
})
