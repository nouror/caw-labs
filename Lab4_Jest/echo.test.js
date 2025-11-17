const exf = require("./echo");

test("the exf function",()=>{
    expect(typeof exf).toBe("function");
});

test("exf prints s value n times", ()=>{
    console.log = jest.fn(); 
    exf("hi", 3);
    expect(console.log).toHaveBeenCalledTimes(3);
    expect(console.log).toHaveBeenCalledWith("hi");
});