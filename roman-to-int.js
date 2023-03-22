// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

const romanToInt = function (s) {
    let totalNum = 0;
    const arr = s.split("");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "M") {
            totalNum += 1000;
        } else if (arr[i] == "D") {
            totalNum += 500;
        } else if (arr[i] == "C") {
            if (arr[i + 1] == "D") {
                totalNum += 400;
                i++;
            } else if (arr[i + 1] == "M") {
                totalNum += 900;
                i++;
            } else {
                totalNum += 100;
            }
        } else if (arr[i] == "L") {
            totalNum += 50;
        } else if (arr[i] == "X") {
            if (arr[i + 1] == "L") {
                totalNum += 40;
                i++;
            } else if (arr[i + 1] == "C") {
                totalNum += 90;
                i++;
            } else {
                totalNum += 10;
            }
        } else if (arr[i] == "V") {
            totalNum += 5;
        } else if (arr[i] == "I") {
            if (arr[i + 1] == "V") {
                totalNum += 4;
                i++;
            } else if (arr[i + 1] == "X") {
                totalNum += 9;
                i++;
            } else {
                totalNum += 1;
            }
        }
        // console.log(totalNum);
    }

    return totalNum;
};

console.log(romanToInt("MCDLXXVI"));
