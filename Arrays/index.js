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


    tasks.push([themes[i] + "," + couple[i]]);

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

    marksList.push([students[i] + ':' + studentsMarks[i]]);

    console.log(marksList);
  }
  return marksList;
}

list(studentsMarks, students);

const p = list(studentsMarks, students);
const v = [...p];

//Завданя 4

let tasksTeam = [...c];

console.log(tasksTeam);

function randomMarks(M, N) {

  let coupleMarks = [];
  let number = [];

  for (i = 0; i < tasksTeam.length; i++) {

    coupleMarks.push([tasksTeam[i] + '-' + [Math.floor(Math.random() * (N - M) + M)]]);

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





