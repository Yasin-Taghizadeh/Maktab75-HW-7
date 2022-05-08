// Insertion Sort

function insertionSort(arr) {
    let n = arr.length;
    let value;
    for (let i = 1; i < n; i++) {
        value = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > value; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = value;
    }
    return arr;
}


console.log(insertionSort([5, 4, 34, 12]));