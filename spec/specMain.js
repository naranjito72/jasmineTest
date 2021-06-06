// here my checking code
// bdd style
// is case sensitive

// Has to be a function
describe("finsSameNumber", function(){
  // expectations
  it("Defines findSameNumber as function", function(){
    expect(typeof findSameNumber).toBe('function');
  });
// if found show the number
  it('Tells which number is repeated', function(){
    expect(findSameNumber( [1, 3, 10, -1, 0, 3])).toBe('The function finds 3 as being the duplicated');
  });
// if none found
it('Tells no number is repeated', function(){
  expect(findSameNumber( [1, 3, 10, -1, 0])).toBe('The function indicates no duplicate have been found');
});
// result is an array
it('Result is an array', function() {
  let result = [];
  expect(result).toEqual(jasmine.any(Array));
});
});

/********************************************************************************/
// cleanArr
describe('cleanArr', function(){
  it('Defines cleanArr', function(){
    expect(typeof cleanArr).toBe('function');
  });
  it('Returns empty array', function(){
    let arrRepeatedNum = [];
    expect(arrRepeatedNum.length).toEqual(0);
  });
  it('Returns empty array', function(){
    let arCm = [];
    expect(arrContainer.length).toEqual(0);
  });
});
/********************************************************************************/
// findSameNumberTwo
describe('findSameNumberTwo', function(){
  it('Defines findSameNumberTwo as function', function(){
    expect(typeof findSameNumberTwo).toBe('function');
  });
  // returns string
  it('Returns a string if result is an empty array', function() {
    expect(findSameNumberTwo([])).toBe('The function indicates no duplicate have been found');
  });
  it('Returns a string with the numbers inside the array', function() {
    expect(findSameNumberTwo([1, 3, 10, -1, 0, 3])).toBe('The function finds 3 as being the duplicated');
  });
  // result is an array
  it('Result is an array', function() {
    let result = [];
    expect(result).toEqual(jasmine.any(Array));
  });
})
/********************************************************************************/
// findSameNumberThree
describe('findSameNumberThree', function(){
  it('Defines findSameNumberThre as function', function(){
    expect(typeof findSameNumberThree).toBe('function');
  });
  // returns string
  it('Returns undefined', function() {
    expect(findSameNumberThree([])).toBe(undefined);
  });
  it('Returns undefined', function() {
    expect(findSameNumberThree([1, 3, 10, -1, 0, 3])).toBe(undefined);
  });
});
  // define object
  describe('findSameNumberObj', function() {
    it('Defines findSameNumberObj as an Object', function(){
      let findSameNumberObj = {};
      expect(findSameNumberObj).toEqual(jasmine.any(Object));
    });
    // methods
    it('findSameNumberObj.makeCopyArr should be a function', function(){
      expect(typeof findSameNumberObj.makeCopyArr).toBe('function');
    });
    it('findSameNumberObj.orderNumbers should be a function', function(){
      expect(typeof findSameNumberObj.orderNumbers).toBe('function');
    });
    it('findSameNumberObj.filterArr should be a function', function(){
      expect(typeof findSameNumberObj.filterArr).toBe('function');
    });
    it('findSameNumberObj.makeNewSet should be a function', function(){
      expect(typeof findSameNumberObj.makeNewSet).toBe('function');
    });
    it('findSameNumberObj.myString should be a function', function(){
      expect(typeof findSameNumberObj.myString).toBe('function');
    });
    // return text sent by Damien
    // returns string
    it('Returns a string', function() {
      let copyArr = [];
      expect(typeof findSameNumberObj.myString(copyArr)).toBe('string');
    });
    it('Returns a string', function() {
      // it does return the whole series of number as it didn't pass through the four previous functions
      let copyArr = [1, 3, 10, -1, 0, 3];
      expect(typeof findSameNumberObj.myString(copyArr)).toBe('string');
    });
  });
