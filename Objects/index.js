'use strict'

const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
},
{
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
},
{
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

// Task 1 

const getSubjects = (students) => {

  const studentKeys = Object.keys(students.subjects);

  const upperArray = [];


  studentKeys.forEach(string => {

    upperArray.push(string.charAt(0).toUpperCase() + string.slice(1));

  });

  const replaceArray = [];

  upperArray.forEach(string => {

    if (string.includes("_")) {

      replaceArray.push(string.replace("_", " "));

    }
    else {

      replaceArray.push(string);
    }
  });

  return replaceArray;


};


const studentsSubjects = getSubjects(students[0]);

console.log(studentsSubjects);

// Task 2 

const getAverageMark = (students) => {

  const subjKeys = Object.keys(students.subjects);

  const marksArray = [];

  subjKeys.forEach(key => {

    marksArray.push(...students.subjects[key]);

  });



  let sum = 0;

  marksArray.forEach(mark => {

    sum += mark;


  });

  let result = (sum / marksArray.length).toFixed(2);

  return result;
}

const studentAverageMark = getAverageMark(students[0]);

console.log(studentAverageMark);


// Task 3

const getStudentInfo = (students) => {

  const infoObject = {};

  infoObject.name = students.name;

  infoObject.course = students.course;

  const subjKeys = Object.keys(students.subjects);

  const result = getAverageMark(students);

  infoObject.averageMark = + result;

  return infoObject;

}

const personalInfo = getStudentInfo(students[0]);

console.log(personalInfo);


// Task 4


const getStudentsNames = (students) => {

  const personalName = [];

  students.forEach(students => {

    personalName.push(students.name)
  });



  personalName.sort();

  return personalName;

}

const sortedName = getStudentsNames(students);

console.log(sortedName);

// Task 5 

const getBestStudent = (students) => {

  const allAverageMark = {};

  students.forEach((student) => {

    const result = getAverageMark(student);

    allAverageMark[student.name] = +result

  });

  const values = Object.values(allAverageMark);

  const maxMark = Math.max(...values);

  const bestStudentOfAll = [];

  let result = 0;

  Object.entries(allAverageMark).forEach(mark => {

    bestStudentOfAll.push(mark);

    if (mark[1]===maxMark){

      result = mark[0];

      return mark[0];


    }

  });

return result;

}

const topStudent = getBestStudent(students);

console.log(topStudent);

// task 6 

function calculateWordLetters(str) {

  let letterCounts = {};

  for (let char of str) {

    if (letterCounts[char]) {

      letterCounts[char]++;

    }

    else {
      letterCounts[char] = 1;
    }

  }
  return letterCounts;
}

let myString = "тест";

let result = calculateWordLetters(myString);

console.log(result);
