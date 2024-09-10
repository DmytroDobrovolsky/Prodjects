//Завдання 1 (console)
function getMaxDigit(number) {
let min = number[0];

  for(const num of number){
    if(num>min){
      min= num;
      console.log("MaxDigit",min);
    }
}
}

 getMaxDigit([1,3,1,5]);

 //2 Завдання не знаю

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

//Завдання 9 потребує пояснення (консоль в return)


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

// Завдання 11 (не вийшло)

function revers(palindrom) {

if(palindrom.revers == palindrom){

  console.log(true);
}
  else {


    console.log(false);
  }
}


let palindrom = 'anna';

revers(palindrom);

// Завдання 12 (не вийшло)

function unicElements(string){

  let result = new Set(string);

  return result;

}


let string = "regenerethion";
 unicElements(string);
