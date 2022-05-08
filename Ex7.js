// Selection Sort

function selectionSort(arr) {

    let n = arr.length;
    for (let j = 0; j < n - 1; j++) {
        let minIndex = j
        for (let i = j + 1; i < n; i++) {
            if (arr[i] < arr[minIndex]) {
                minIndex = i;
            }
        }
        let x = arr[minIndex];
        arr[minIndex] = arr[j];
        arr[j] = x;
    }
    return arr;
};

console.log(selectionSort([6, 2, 7, 5]));