// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const arr = str.split("");
    const maxChar = { count: 0, char: "" };
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] == " ") {
                break;
            } else if (arr[i] == arr[j]) {
                count++;
            }
        }
        if (count >= maxChar.count) {
            maxChar.count = count;
            maxChar.char = arr[i];
        }
    }

    return maxChar.char;
}

console.log(maxChar("apple 1231111"));
