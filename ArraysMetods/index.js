//Завдання 1

function getRandomArray(length, min, max) {

    let array = [];

    for (let i = 0; i<length; i++){

        array.push(Math.floor(Math.random() * (max - min) + min));

        

    }
    return array;
}



const getRandArr = getRandomArray(10, 1, 50);

console.log("task 1:",getRandArr);


//Завдання 2 треба, аби Тарас пояснив !!!!

const mode = (arry) => {

    const mode = {};

    let max = 0, count = 0;
  
    for(let i = 0; i < arry.length; i++) {

      const item = arry[i];
      
      if(mode[item]) {

        mode[item]++;

      }
      
      else {

        mode[item] = 1;

    }
      
      if(count < mode[item]) {

        max = item;

        count = mode[item];

      }
    }
     
    return max;

  };

  const arry = [2, 1, 3, 2, 2];

 const getModa =  mode (arry);

 console.log("task 2:",getModa);
 

// Завдання 3

function getAverage(numbersTeam){

    let sum = 0;

    for(let i = 0; i<numbersTeam.length;i++){        

        sum +=numbersTeam[i];
        

    }
    let average = sum / numbersTeam.length;
    
    return average;
}

 const numbersTeam = [10, 10, 10, 10, 10];

const getAver = getAverage(numbersTeam);

console.log('task 3:',getAver);

//Завдання 4

const mediana = (array) => {

    let sup = 0;
    
    array.sort(function(a, b){return a - b});
    
    arrayLength = array.length % 2 ;
        
    if(arrayLength === 1){
    
    array.forEach((item, i) => {
    
      sup += array[i];
    
    });
}


else{

        
    let getMedItems = (array[array.length / 2 - 1] + array[array.length / 2]) / 2 ;   

    console.log(getMedItems);
    

    return getMedItems ;

    

        
}

const result = sup / array.length;    

    
    return result;
    
    }
    
    let arr = [5,7,9,10,8,5,9];
    
    const startMd = mediana (arr);

console.log("task 4:",startMd);


//Завдання 5

function filterEvenNumbers(numbersArray){

    let oddNumbers = [];

    for (let i = 0; i<=numbersArray.length;i++){

        if(numbersArray[i]%2==1){


        oddNumbers.push(numbersArray[i]);

        
        }

    }
    return oddNumbers;

}

let numbersArray = [1, 2, 3, 4, 5,7,7,7,8,6];

const filtEvnNum = filterEvenNumbers(numbersArray);

console.log("task 5: ",filtEvnNum);


//Завдання 6

function countPositiveNumbers(numbersBlock){

let result = 0;

    for(let i = 0; i<=numbersBlock.length;i++){

        if(numbersBlock[i]>0){

          
            
            result += 1;

            
        }

    }

 console.log("task 6 :",result);

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

//Завдання 9

const divideByThree = (_str) => {

    const str = _str.toLowerCase();

    const res = [];

for(let i =0; i<str.length;i+=3){

    let letters = "";

if(str[i]){

    letters += str[i];

}

if(str[i+1]){

    letters+= str[i+1];
}

if(str[i+2]){

    letters+=str[i+2];
}

res.push(letters);

}

return res;

}

const divideThree = divideByThree ("Commander");

console.log("task 9:",divideThree);
