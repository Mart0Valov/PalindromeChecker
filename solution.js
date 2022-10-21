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
    const original = filteredStr.join('');
    const reversedStr = filteredStr.reverse();
    console.log(original);
    console.log(reversedStr.join(''));
    if (original === reversedStr.join('')) {
        return true;
    }
    return false;
}

const res = palindrome("1 eye for of 1 eye.");
console.log(res);