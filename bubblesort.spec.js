describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('sorts array of 2', function(){
    expect( bubbleSort([2,1])).toEqual([1,2]);
  });
  it('sorts array of 4', function(){
    expect( bubbleSort([2,1,4,3])).toEqual([1,2,3,4]);
  });
  it('sorts array with duplicates, and large numbers', function(){
    expect( bubbleSort([2,1,25,1,4,10,3])).toEqual([1,1,2,3,4,10,25]);
  });
});
