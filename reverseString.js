function reverseString (string) {
    const array = string.split('');
    const reverse = array.reverse();
    const join = reverse.join('')
    return join
};

module.exports = reverseString;