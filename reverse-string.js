// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // const arr = str.split("");
    // const reverseString = arr.reverse().join("");
    return str.split("").reverse().join("");
}

console.log(reverse("Greetings!"));
