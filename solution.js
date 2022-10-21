function filterString(str) {
    return str.split('')
        // Removing all non alphanomeric characters
        .filter(char => /^[a-zA-Z0-9]+$/.test(char))
        // and swtiching all letters to lower case.
        .map(char => char.toLowerCase());
}

function palindrome(str) {
    const filteredStr = filterString(str);
    const reversedStr = [...filteredStr].reverse();
    if (filteredStr.join('') === reversedStr.join('')) {
        return true;
    }
    return false;
}

const test1 = palindrome("eye"); // should return true
console.log(test1);
const test2 = palindrome("_eye"); // should return true