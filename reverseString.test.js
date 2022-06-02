const reverseString = require('./reverseString');

test('reverse string so it equals gnirts', () => {
    expect(reverseString('string')).toBe('gnirts');
});