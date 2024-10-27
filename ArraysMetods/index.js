//Завдання 1

function getRandomArray(length, min, max) {

    let array = [];

    for (let i = 0; i<length; i++){

        array.push(Math.floor(Math.random() * (max - min) + min));

        console.log("task 1 :",array);
        

    }
    return array;
}



getRandomArray(10, 1, 50);

// Завдання 2

// завдання 3

function getAverage(numbersTeam){

    let sum = 0;

    for(let i = 0; i<=numbersTeam.length;i++){        

        sum += i;
        

    }
    let average = sum / numbersTeam.length;
    
    console.log("task 3 :",average);

    return average;
}

 const numbersTeam = [10, 10, 10, 10, 10];

getAverage(numbersTeam);




//Завдання 4

//Завдання 5

function filterEvenNumbers(numbersArray){

    let oddNumbers = [];

    for (let i = 0; i<=numbersArray.length;i++){

        if(i%2==1){


        oddNumbers.push(i);

        console.log("task 5 :",oddNumbers);
        
        }

    }
    return oddNumbers;

}

let numbersArray = [1, 2, 3, 4, 5,7,7,7,8,6];

filterEvenNumbers(numbersArray);

//Завдання 6

function countPositiveNumbers(numbersBlock){

let result = 0;

    for(let i = 0; i<=numbersBlock.length;i++){

        if(numbersBlock[i]>0){

          
            
            result += 1;

            console.log("task 6 :",result);
            
        }

    }
return result;
}

const numbersBlock = [-2, 3, -4, -5, 6];

countPositiveNumbers(numbersBlock);

//Завдання 7

function getDividedByFive(blockOfNumbers){

let getNumbers = blockOfNumbers.filter(number=> number%5 === 0);

console.log('task 7:',getNumbers);

return getNumbers;

}

const blockOfNumbers = [2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]

getDividedByFive(blockOfNumbers);

// Завдання 8

const replaceBadWords = (str) => {
    
let newStr = str;

const badWords = ["fuck","shit"];

badWords.forEach((word) =>{

newStr= newStr.replaceAll(word,"****");

});

return newStr;

};

const str = "Are you fucking kidding?";

const res = replaceBadWords(str);

console.log("task 8:",res);
