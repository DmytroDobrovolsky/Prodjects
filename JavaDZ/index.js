let numericN = prompt('Яке число N?', );
let numericM = prompt('Яке число M?', );
console.log(numericN);
console.log(numericM);

numericM = +numericM ;
numericN = +numericN ;

Number.isInteger(numericM);
Number.isInteger(numericN);
console.log(Number.isInteger(numericM));
console.log(Number.isInteger(numericN));

let miss = confirm("Пропускати парні числа ?");
console.log(miss);

function sum (numericN,numericM){

let result = 0;

for (let i=numericN; i<=numericM; i++){

if (miss=false){

result += i;
}

  if(i%2==1){
    result+=i;
  }



}
return result;
}

name sum (numericN,numericM);
