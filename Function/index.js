//Завдання 1 (console)
function getMaxDigit(number) {
let min = number[0];

  for(const num of number){
    if(num>min){
      min= num;
    }
}

return min;
}

 const maxDigit = getMaxDigit([1,3,1,5]);

 console.log('maxDigit',maxDigit);
 


 //Завдання 2 

 const getPow = (a,pow)=>{

  let res = a;

  for (let p =1; p<pow; p++){

    res *=a;

  }
return res;
 }

 const res = getPow (3,4);

console.log("getPow",res);


//3 завдання :

 function convertToUpperCase(input) {

   const word= input[0].toUpperCase()+input.slice(1);

 console.log('name:',word);
}

convertToUpperCase('тарас');

//4 завдання :

function money ( rate, salary){

let sumRate = (salary / 100 ) * rate;

console.log('sumRate:', sumRate);

let sum = salary - sumRate;

console.log('received:',sum );

}

money ( 19, 1000);

//5 завдання:

function getRandomNumber (N, M){

let number = Math.floor(Math.random() * 11);

console.log("number", number);
}

let N = 1;
let M = 10;

getRandomNumber (N, M);

// 6 завдання
function countletter (word) {

let result = 0;


  for (let letter of word){

    if (letter == "a" || letter == "A" ){



      result+=1;

      console.log("result",result);
    }
  }
}

const word = "Alphabet";
countletter (word);

// 7/8 завдання

function convertCurrency (sum){

let res = "";

let UAH = sum.includes('UAH');

console.log('UAH',UAH);

let USD = sum.includes("$");

console.log('USD',USD);

let GRN = sum.includes('uah');

console.log('uah',GRN);

    if (UAH==true){

      sum = sum.replaceAll("UAH","");

      console.log('sum',sum);

      sum = +sum;

      console.log('sum',sum);

      res += (sum / 41.7)+"$";

      console.log("res",res);

      }

    else if (USD==true) {

sum = sum.replaceAll("$","");

console.log('sum',sum);

sum = +sum;

console.log('sum',sum);

res += (sum * 41.7)+"UAH";

console.log("res",res);
}

  else if (GRN==true) {

  console.log("undefined");

}

else {
  console.error('Not convertible');
}

      }


let sum ="100$";
convertCurrency (sum);

//Завдання 9 


function generatePassword(length) {

    const characters = '1234567891011121314151617181920';

    let password = '';

    for (let i = 0; i < length; i++) {

        const randomIndex = Math.floor(Math.random() * characters.length);

        password += characters[randomIndex];
    }
    return password;
}

console.log(generatePassword(8));

//Завдання 10

function deleteLetter (name){

console.log(name.replaceAll("a",""));
}

const name = "Taras";
deleteLetter (name);

// Завдання 11 

function revers(palindrom) {

 let reversedWord = "";

let result = 0;

  for(let i = palindrom.length-1; i>=0; i--) {

    reversedWord+=palindrom[i];

if(reversedWord == palindrom && i == 0){

  result = true;
  
}
  else if(reversedWord !== palindrom && i == 0) {


    result = false;
  }
}

return result;

}

const resultRevers= revers('anna');

console.log('resultRevers:',resultRevers);


// Завдання 12 (не вийшло)

function unicElements(string){


  let letter = new Set(string);

  let res = "";

letter.forEach(value => {

  res+=value;
  
});

  return res;

}


let string = "regenerethionnnnn";

 const unElem = unicElements(string);

 console.log(unElem);
 



 