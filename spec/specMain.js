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
  });
// other way?
describe("Object has got five methods", function(){
  var arrNum = [];
  var findSameNumberObj;
  var makeCopyArr;
  var orderNumbers;
  var filterArr;
  var makeNewSet;
  var myString;

  beforeEach(function(){
    findSameNumberObj = {
      0: makeCopyArr(arrNum),
      1: orderNumbers(arrNum),
      2: filterArr(arrNum),
      3: makeNewSet(arrNum),
      4: myString(arrNum)
    };
  });
  it("matches object with the pair key/value", function(){
    expect(findSameNumberObj).toEqual(jasmine.objectContaining({
      0: makeCopyArr(arrNum)
    }));
    expect(findSameNumberObj).toEqual(jasmine.objectContaining({
      1: orderNumbers(arrNum)
    }));
    expect(findSameNumberObj).toEqual(jasmine.objectContaining({
      2: filterArr(arrNum)
    }));
    expect(findSameNumberObj).toEqual(jasmine.objectContaining({
      3: makeNewSet(arrNum)
    }));
    expect(findSameNumberObj).toEqual(jasmine.objectContaining({
      4: myString(arrNum)
    }));
  });
})
