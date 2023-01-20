// Objects that refer to other objects

const s = 'aaabbbb';
const letters = 'abz'

function cs_str_letter_count_2(s, letters) {
    let letter_count = {};

    for (let char of s) {
        if (!(char in letter_count))
            letter_count[char] = 0;

        letter_count[char]++;
    }

    let result = [];

    for (let char of letters) {
        if (char in letter_count)
            result.push(letter_count[char]);
        else
            result.push(0);
    }

    return result;
}

console.log(cs_str_letter_count_2(s, letters))