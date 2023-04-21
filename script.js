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
