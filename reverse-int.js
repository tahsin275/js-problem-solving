// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // const arr = String(n).split("");
    // const modArr = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] == "-") {
    //         modArr.unshift(arr[i]);
    //     } else if (arr[i] == "0") {
    //         continue;
    //     } else {
    //         modArr.push(arr[i]);
    //     }
    // }
    // if (modArr[0] != "-") {
    //     return Number(modArr.reverse().join(""));
    // } else {
    //     modArr.splice(0, 1);
    //     modArr.reverse();
    //     modArr.unshift("-");
    //     return Number(modArr.join(""));
    // }

    const reversed = n.toString().split("").reverse().join("");
    return parseInt(reversed) * Math.sign(n);
}

console.log(reverseInt(-900));
