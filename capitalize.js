function capitalize (string) {
    capital = string.slice(0,1).toUpperCase()   
    remaining = string.slice(1,string.length)
    return capital + remaining
};

module.exports = capitalize;