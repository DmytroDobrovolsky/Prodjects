//let d = 0;
//let getDrinks = 0;
//while (d <= 5) {
//d = d + 1;
//console.log('d:',d);
//getDrinks = getDrinks + d;
//console.log("getDrinks:",getDrinks);
//}

// First task //
let d = 0;
let getDrinks = 0;

do {
  console.log('d:',d);
getDrinks = getDrinks + d;

d = d + 1;

} while (d <= 10);
console.log("getDrinks:",getDrinks);

//console.log(getDrinks(5)); it`s: 15;
//console.log(getDrinks(0)); it`s: 0;
//console.log(getDrinks(6)); it`s: 21;
//console.log(getDrinks(10)); it`s: 55;

//Second Task//
const N = 99;
for (let i = 1; i <= N; i+=1){
  console.log("i",i);
}

//Third Task//
const step = 3;
let guest = 1;
let drinks = 0;

do{

  guest += step;

  console.log("guest:",guest);

  drinks = drinks + guest;

} while (guest<10)

console.log('drinks:',drinks);
