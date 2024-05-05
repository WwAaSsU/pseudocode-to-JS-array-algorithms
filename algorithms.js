const prompt = require('prompt-sync')({sigint: true});

const length = prompt("How long should the array be? ")
let arrayLength = Number(length);

const max = prompt("What should be the largest possible number in the array? ")
let maxNumber = Number(max);
var digits = Math.log(Math.abs(maxNumber)) * Math.LOG10E + 1 | 0;

function GenerateArray(arrayLength, maxNumber) {
    return Array.from({length: arrayLength}, () => Math.floor(Math.random() * maxNumber));
}

let randomizedArray = GenerateArray(arrayLength, maxNumber);

const counts = {};
randomizedArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });

function totalDuplicates(counts) {
    let totalDuplicates = 0;
    for (let i in counts) {
        if (counts[i] > 1) {
            totalDuplicates += counts[i];
        }
    }
    return totalDuplicates;
}

let duplicatesTotal = totalDuplicates(counts);


function SortArray(array){
    swapCounter = 0
    // console.log("Unsorted Array:");
    // console.log(array);

    for (let i = 0; i < arrayLength; i++) {

        for (let j = 0; j < arrayLength; j++)  {

            if (array[j] > array[j + 1])    {
                
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                swapCounter++;
            };
        };
    };

    // console.log("Sorted Array:");
    // console.log(array);
    // console.log("Moves needed:", swapCounter);  
        
    SearchArray(array, arrayLength)
    return array;
};

randomizedArray = SortArray(randomizedArray);



function SearchArray(array, arrayLength){

    let found = false
    let answer = 0
    let high = arrayLength - 1
    let low = 0
    var searchCounter = 1
    
    var probability = ((1 / Math.pow(10, digits)) * (arrayLength - duplicatesTotal)) * 100
    console.log("The probability of guessing a number in the array is", probability.toFixed(2), "%")

    const num = prompt("What number should I find? ");
    let searchNum = Number(num)
    let mid = 0

    while (found = false, low <= high){

        mid = Math.round((high + low) / 2);
        // console.log('Mid #', searchCounter, '=', mid, "which is =", array[mid]);

        if (array[mid] == searchNum){
            searchCounter++;
            found = true;
            answer = mid
            console.log('CONGRATULATIONS!!!', searchNum, "is in the array and has index:", answer)
            console.log("Moves needed:", searchCounter);
            return answer;
        }
        else if (searchNum < array[mid]){

            high = mid - 1
        }
        else if (searchNum > array[mid]){

            low = mid + 1
        }

        
    }
    if (!answer){

        console.log(searchNum, "is not in the array");
        var difference = Math.abs((searchNum-array[mid]));
        // console.log("Moves needed:", searchCounter);
        console.log('you were', difference, 'away from guessing a number')
        console.log('try again!')
        searchCounter++;
        SearchArray(array, arrayLength)
    }
}