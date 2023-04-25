/*
 * Complete the 'insertionSort' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// below times out for some cases
function insertionSort(arr) {
    let shifts = 0;
    
    for(let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        let j = i - 1;
       
        while(j >= 0 && currentValue < arr[j]) {
            if(arr[j] > currentValue) {
                arr[j + 1] = arr[j];
            }
            shifts++;
            j--;
        }
        arr[j + 1] = currentValue;
    }
    console.log(shifts);
    return shifts;
}

////////////////////////////////////////////////////////////
const mergeAndCount = (arr, left, mid, right) => {
    // left subarray
    let leftArr = [];
    for(let i = left; i < mid + 1; i++) {
        leftArr.push(arr[i]);
    }
    
    // right subarray
    let rightArr = [];
    for(let i = mid + 1; i < right + 1; i++) {
        rightArr.push(arr[i]);
    }
    
    let i = 0;
    let j = 0;
    let k = left;
    let swaps = 0;
    
    while(i < leftArr.length && j < rightArr.length) {
        if(leftArr[i] <= rightArr[j]) arr[k++] = leftArr[i++];
        else {
            arr[k++] = rightArr[j++];
            swaps += (mid + 1) - (left + i);
        }
    }
    
    while(i < leftArr.length) {
        arr[k++] = leftArr[i++];
    }
    while(j < rightArr.length) {
        arr[k++] = rightArr[j++];
    }
    // console.log('swaps ********', swaps);
    return swaps;
}

// this is actually a merge sort function, add left and right variables in arguments
function insertionSort(arr, left = 0, right = arr.length - 1) {
    // keeps track of the inversion count at a particular node of the recursion tree
    let count = 0
    if(left < right) {
        let mid = Math.floor((left + right) / 2);
        
        // total inversion count = left subarray count + right subarray count + merge count
        
        // left subarray count
        count += insertionSort(arr, left, mid)
        // right subarray count
        count += insertionSort(arr, mid + 1, right);
        // merge count
        count += mergeAndCount(arr, left, mid, right);        
    }
    return count;
}
