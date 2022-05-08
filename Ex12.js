function inputNumber(n) {

    let evenNumber = 0;
    let oddNumber = 0;
    let zeroNumber = 0;

    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            evenNumber = evenNumber + 1;
        } else if (i % 2 !== 0) {
            oddNumber = oddNumber + 1;
        } else {
            zeroNumber = zeroNumber + 1;
        }
    }
    console.log(evenNumber, oddNumber, zeroNumber);
};


console.log(inputNumber(11));