//Calculate sum of the multiple

function sumOfMultiplies (m,n) {
    let sum = 0;

    for (let i = 1; i < n;i++) {
        if (i % m == 0) {
            sum += i
        }
    }
    return sum
}


console.log(sumOfMultiplies(6,40))