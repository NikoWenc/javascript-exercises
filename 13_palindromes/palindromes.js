const palindromes = function (str) {
    
    const validLetters = 'abcdefghijklmnopqrstuvwxyz0123456789';

    let mainStr = str.toLowerCase()
                     .split('')
                     .filter((string) => validLetters.includes(string))
                     .join('');

    let revStr = mainStr.split('').reverse().join('');

    return mainStr === revStr;
};

// Do not edit below this line
module.exports = palindromes;
