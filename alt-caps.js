/* Alternating Caps
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str) {
    const arr = str.split(" ");
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const newTwo = [];
        for (let j = 0; j < arr[i].length; j++) {
            const str = arr[i];
            if ((j > 0) & (j % 2 == 1)) {
                newTwo.push(str[j].toUpperCase());
            } else {
                newTwo.push(str[j]);
            }
        }
        newArr.push(newTwo.join(""));
    }
    return newArr.join(" ");
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));
