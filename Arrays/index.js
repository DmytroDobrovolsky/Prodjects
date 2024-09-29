const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій",
  "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів",
  "Алгоритми структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

//Завданя 1
function getPair(people) {
  let pair = [];
  let boys = [];
  let girls = [];

  for (let student of people) {

    if (student[student.length - 1] === "а") {

      girls.push(student);

      console.log(girls);
    }
    else {
      boys.push(student);

      console.log(boys);
    }
  }
  for (let i = 0; i < boys.length; i++) {

    pair.push([girls[i], boys[i]]);

  }

  return pair;


}

let people = [...students];

getPair(people);

const a = getPair(people);

console.log(a);

let couple = [...a];

console.log(couple);



// Завдання 2

function prodject(themes, couple) {

  let tasks = [];

  for (i = 0; i < themes.length; i++) {

    let supportArrays=[];


    supportArrays.push(themes[i]);

    supportArrays.push(couple[i][0]+" "+couple[i][1]);
   

    tasks.push(supportArrays);

    console.log(tasks);
  }

  return tasks;
}

prodject(themes, couple);

const d = prodject(themes, couple);

const c = [...d]

//Завдання 3

const studentsMarks = [...marks];

function list(studentsMarks, students) {

  const marksList = [];

  for (i = 0; i < students.length; i++) {

    let arraySuport = [];

    arraySuport.push(students[i]+":");

    arraySuport.push(studentsMarks[i]);

   marksList.push(arraySuport);

    console.log(marksList);
  }
  return marksList;
}

list(studentsMarks, students);

const p = list(studentsMarks, students);
const v = [...p];

//Завданя 4

function manPerson (male){

  let maleArrays = [];

  for(person of male){

    if(person[person.length-1] !== "а"){

maleArrays.push(person);

console.log(maleArrays);


    }

  }
  return maleArrays;
}

let male = [...students];

manPerson (male);

let menTeam = manPerson(male);

console.log(menTeam);


let menTeamDublicat = [...menTeam];

function womanPerson(female){

  let femaleArrays = [];

  for(let person of female){
    if(person[person.length-1] === "а"){

femaleArrays.push(person);

console.log(femaleArrays);

    }
  }
  return femaleArrays
}

let female = [...students];

womanPerson(female);

let womenTeam = womanPerson(female);

console.log(womenTeam);

let womenTeamDublicat = [...womenTeam];


let tasks = [...themes];

function randomMarks(M, N) {


  let coupleMarks = [];
 
 

  for (i = 0; i <tasks.length; i++) {

    let numberForTeam = [];

    numberForTeam.push(womenTeamDublicat[i]+ " "+ menTeamDublicat[i]);

    //numberForTeam.push(menTeamDublicat[i]);

    numberForTeam.push(tasks[i]);


    numberForTeam.push(Math.floor(Math.random() * (N - M) + M));

    coupleMarks.push(numberForTeam);

    console.log(coupleMarks);

  }
  return coupleMarks;
}

randomMarks(1, 5);

const y = randomMarks(1, 5);


console.log(students);
console.log(themes);
console.log(marks);

console.log("task 1", a);
console.log("task 2", d);
console.log("task 3", v);
console.log("task 4", y);





