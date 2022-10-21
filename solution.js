function filterString(str) {
    return str.split('')
        // Filtering all non alphanomeric characters
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

const test1 = palindrome("eye"); // should return true
console.log(test1);
const test2 = palindrome("_eye"); // should return true
console.log(test2);
const test3 = palindrome("race car") // should return true
console.log(test3);
const test4 = palindrome("not a palindrome"); // should return false
console.log(test4);
const test5 = palindrome("A man, a plan, a canal. Panama"); // should return true
console.log(test5);
const test6 = palindrome("never odd or even"); // should return true
console.log(test6);
const test7 = palindrome("nope"); // should return false
console.log(test7);
const test8 = palindrome("almostomla"); // should return false
console.log(test8);
const test9 = palindrome("My age is 0, 0 si ega ym."); // should return true
console.log(test9);
const test10 = palindrome("1 eye for of 1 eye."); // should return false
console.log(test10);
const test11 = palindrome("0_0 (: /-\ :) 0-0"); // should return true
console.log(test11);
const test12 = palindrome("five|\_/|four"); // should return false
console.log(test12);
