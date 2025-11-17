const mean = require('./notation');

test ("Average of [10, 20, 30, 40] is 25",()=>{
    expect(mean([10, 20, 30, 40])).toBe(25);
});
