const prompt = require('prompt-sync')({sigint: true});

function SortArray(array){

    const arrayLength = array.length;
    swapCounter = 0

    // console.log("Un-Sorted Array:");
    // console.log(array);
    // console.log("Number of Items to Swap:");
    // console.log(arrayLength);

    for (let i = 0; i < arrayLength; i++) {

        for (let j = 0; j < arrayLength; j++)  {

            if (array[j] > array[j + 1])    {
                
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                swapCounter++;
            };
        };
    };

    SearchArray(array, arrayLength)
    return array;
};

sortedArray = SortArray([4, 6, 8, 2, 3, 4, ]);

// console.log("Sorted Array:");
// console.log(sortedArray);
// console.log("Moves needed:", swapCounter);  

function SearchArray(array, arrayLength){

    let found = false
    let answer = 0
    let high = arrayLength - 1
    let low = 0
    let searchCounter = 0

    console.log("length", arrayLength)
    console.log("high", high)
    console.log("Array", array)
    
    const num = prompt("What number should I find? ");
    let searchNum = Number(num)

    while (found = false, low <= high){

        let mid = Math.round((high + low) / 2);
        console.log("mid", mid)

        if (array[mid] == searchNum){

            found = true;
            answer = mid
            console.log(searchNum, "is in the array and has index:", answer)
            console.log("Moves needed:", searchCounter);
            return answer;
        }
        else if (searchNum < array[mid]){

            high = mid - 1
        }
        else if (searchNum > array[mid]){

            low = mid + 1
        }

        searchCounter++;
    }
    if (!answer){

        console.log(searchNum, "is not in the array")
    }
}
