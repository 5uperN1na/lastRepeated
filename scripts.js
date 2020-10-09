
//write a function lastRepeated that takes a string as an argument
//and the function should return or log the last repeated character in the string

function lastRepeated(str) {
    let last = '';
    let charMap = {};

    for (let char of str)

        if (!charMap[char]) {

            charMap[char] = 1;

        } else {

            charMap[char]++;

        }


    console.log(charMap);
}

lastRepeated("hello world");