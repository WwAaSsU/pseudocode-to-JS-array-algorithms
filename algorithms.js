const prompt = require('prompt-sync')({sigint: true});

const length = prompt("How long should the array be? ")
let arrayLength = Number(length);

const max = prompt("What should be the largest possible number in the array? ")
let maxNumber = Number(max);

function GenerateArray(arrayLength, maxNumber) {
    return Array.from({length: arrayLength}, () => Math.floor(Math.random() * maxNumber));
}

let randomizedArray = GenerateArray(arrayLength, maxNumber);

function SortArray(array){
    swapCounter = 0

    for (let i = 0; i < arrayLength; i++) {

        for (let j = 0; j < arrayLength; j++)  {

            if (array[j] > array[j + 1])    {
                
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                swapCounter++;
            };
        };
    };

    console.log("Sorted Array:");
    console.log(array);
    console.log("Moves needed:", swapCounter);  
        
    SearchArray(array, arrayLength)
    return array;
};

randomizedArray = SortArray(randomizedArray);


function SearchArray(array, arrayLength){

    let found = false
    let answer = 0
    let high = arrayLength - 1
    let low = 0
    let searchCounter = 0
    
    const num = prompt("What number should I find? ");
    let searchNum = Number(num)

    while (found = false, low <= high){

        let mid = Math.round((high + low) / 2);
        console.log('Mid #', searchCounter, '=', mid, "which is =", array[mid]);

        if (array[mid] == searchNum){
            searchCounter++;
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

        console.log(searchNum, "is not in the array");
        console.log("Moves needed:", searchCounter);

    }
}
