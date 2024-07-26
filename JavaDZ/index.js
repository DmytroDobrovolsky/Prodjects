let miss= 0;
let numericN = 0;
let numericM = 0;

do {

 numericN = prompt('Яке число N?' );
 console.log(numericN);

 numericN = +numericN ;
 console.log(numericN);

 Number.isInteger(numericN);
 console.log(Number.isInteger(numericN));

}

 while (!Number.isInteger(numericN));

 do {

  numericM = prompt('Яке число M?' );
 console.log(numericM);

 numericM = +numericM ;
 console.log(numericM);

 Number.isInteger(numericM);
 console.log(Number.isInteger(numericM));

 }

 while (!Number.isInteger(numericM));

 miss = confirm("Пропускати парні числа ?");
 console.log(miss);

function sum (numericN,numericM){

let result = 0;

for (let i=numericN; i<=numericM; i++){

 if (miss==false){

result += i;
console.log(result);
}

  else if(i%2==1){
    result+=i;
    console.log(result);

  }

}
return result;
}

const finalRes = sum(numericN,numericM);
console.log(finalRes);
