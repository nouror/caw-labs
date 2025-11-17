const first =require("./first");

test("return empty array if array is null",()=>{
    expect(first(null, 2)).toEqual([]);
});

test("returns empty array if n<=0",()=>{
    expect(first([1,2,3,4,5],0)).toEqual([]);
});

test("returns the first element when n is null ",()=>{
    expect(first([1,2,3,4,5])).toBe(1);
});

test("returns the first 3 elements ",()=>{
    expect(first([1,2,3,4,5],3)).toEqual([1,2,3]);
});
