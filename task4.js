function roundMe(...numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    if (numbers.length === 1) {
        return Math.round(numbers[0]);
    }

    let result = [];

    for (let number of numbers) {
        result.push(Math.round(number));
    }

    return result;
}

console.log(roundMe());
console.log(roundMe(4.7));
console.log(roundMe(4.7, 4.4));