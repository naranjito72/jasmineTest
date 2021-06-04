// here my checking code
// bdd style
// is case sensitive

// Has to be a function
describe("finsSameNumber", function(){
  // expectations
  it("Defines what is findSameNumber", function(){
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
});


// cleanArr
describe('cleanArr', function(){
  it('Defines what cleanArr is', function(){
    expect(typeof cleanArr).toBe('function');
  });
});
