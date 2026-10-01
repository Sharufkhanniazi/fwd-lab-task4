function abs(...numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    if (numbers.length === 1) {
        return numbers[0] < 0 ? -numbers[0] : numbers[0];
    }

    let result = [];

    for (let number of numbers) {
        result.push(number < 0 ? -number : number);
    }

    return result;
}

function ceil(...numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    if (numbers.length === 1) {
        return Math.ceil(numbers[0]);
    }

    let result = [];

    for (let number of numbers) {
        result.push(Math.ceil(number));
    }

    return result;
}

function floor(...numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    if (numbers.length === 1) {
        return Math.floor(numbers[0]);
    }

    let result = [];

    for (let number of numbers) {
        result.push(Math.floor(number));
    }

    return result;
}

console.log(abs(-5));
console.log(abs(-5, 3, -8));

console.log(ceil(4.2));
console.log(ceil(4.2, 5.7));

console.log(floor(4.8));
console.log(floor(4.8, 5.9));