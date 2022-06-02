const capitalize = require('./capitalize');

test('Capitalize first letter', () => {
    expect(capitalize('string')).toBe('String');
});