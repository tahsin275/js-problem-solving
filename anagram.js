// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function trimArray(arr) {
    const pattern = /^[a-zA-Z]+$/;
    for (let i = 0; i < arr.length; i++) {
        if (!pattern.test(arr[i])) {
            arr.splice(i, 1);
            i--;
        }
    }
}

function anagrams(stringA, stringB) {
    const arrA = stringA.toLowerCase().split("");
    const arrB = stringB.toLowerCase().split("");
    trimArray(arrA);
    trimArray(arrB);
    console.log(arrA);
    console.log(arrB);
}

anagrams("RAIL! SAFETY!", "fairy tales");
