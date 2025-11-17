const last =require("./last");

test("return empty array if array is null",()=>{
    expect(last(null, 2)).toEqual([]);
});

test("returns the last element when n is null ",()=>{
    expect(last([1,2,3,4,5])).toBe(5);
});

test("returns the last 2 elements ",()=>{
    expect(last([1,2,3,4,5],2)).toEqual([4,5]);
});

test("return the entire array if n is >= array.lenght",()=>{
    expect(last([1,2,3,4,5],10)).toEqual([1,2,3,4,5]);
});


