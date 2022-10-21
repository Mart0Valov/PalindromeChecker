function filterTest(char) {
    return /^[a-zA-Z0-9]+$/.test(char);
}

function filterString(str) {
    return str.split('')
        .filter(filterTest)
        .map(el => el.toLowerCase());
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