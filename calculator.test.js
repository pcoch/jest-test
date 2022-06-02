const calculator = require('./calculator');

test('adds two numbers', () => {
    expect(calculator.add(2,3)).toBe(5);
});

test('subtracts a number from another', () => {
    expect(calculator.subtract(10, 3)).toBe(7);
});

test ('divides two mumbers', () => {
    expect(calculator.divide(10, 2)).toBe(5);
});

test ('multiplies two numbers', () => {
    expect(calculator.multiply(2, 5)).toBe(10);
});