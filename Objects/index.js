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

// Task 1 (як написати код, так аби саббжекс, який складається  з двох слів писав першу літеру в обох словах з великої букви)

 const getSubjects = (students) => {

const studentKeys = Object.keys (students.subjects);

const upperArray = [];

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

studentKeys.forEach(string => {

if(alphabet.includes(string[0])){

  upperArray.push(string.charAt(0).toUpperCase() + string.slice(1));
}  

});

const replaceArray = [];

upperArray.forEach(string => {

if(string.includes("_")){

replaceArray.push(string.replace("_", " "));

}
    else{

      replaceArray.push(string);
    }
});

return replaceArray;


 };


const studentsSubjects = getSubjects (students[0]);

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

const  getStudentInfo = (students) => {

  const infoObject = {};

  infoObject.name = students.name;

  infoObject.course = students.course;

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

  infoObject.averageMark = + result;

  console.log(infoObject);

}


const personalInfo = getStudentInfo(students[0]);

// Task 4 (пояснити чому студенті має бути в лапках фор іч , бо обджектс не підійшло)


const getStudentsNames = (students) => {

const personalName = [];

students.forEach(students => {

personalName.push(students.name)
});



personalName.sort();

return personalName;

}

const sortedName = getStudentsNames (students) ;

console.log(sortedName);

// Task 5 

const getBestStudent = (students) =>{

  const allAverageMark = [];

  const subjKeysOne = Object.keys(students[0].subjects);  

  const marksArrayOne = [];

  subjKeysOne.forEach(key => {

    marksArrayOne.push(...students[0].subjects[key]);

  });

  

  let sumOne = 0;

  marksArrayOne.forEach(mark => {

    sumOne += mark;


  });

  let resultOne = (sumOne / marksArrayOne.length).toFixed(2);

  allAverageMark.push(+resultOne);

  console.log(resultOne);

  
  
  const subjKeysTwo = Object.keys(students[1].subjects);  

  const marksArrayTwo = [];

  subjKeysTwo.forEach(key => {

    marksArrayTwo.push(...students[1].subjects[key]);

  });

  

  let sumTwo = 0;

  marksArrayTwo.forEach(mark => {

    sumTwo += mark;


  });

  let resultTwo = (sumTwo / marksArrayTwo.length).toFixed(2);

  allAverageMark.push(+resultTwo);


  console.log(resultTwo);
  

  
  const subjKeysThree = Object.keys(students[2].subjects);  

  const marksArrayThree = [];

  subjKeysThree.forEach(key => {

    marksArrayThree.push(...students[2].subjects[key]);

  });

  

  let sumThree = 0;

  marksArrayThree.forEach(mark => {

    sumThree += mark;


  });

  let resultThree = (sumThree / marksArrayThree.length).toFixed(2);

  allAverageMark.push(+resultThree);


  console.log(resultThree);

  console.log(allAverageMark);


  const bestStudentOfAll = [];

 allAverageMark.forEach(mark => {

  if(allAverageMark[0]>allAverageMark[1]&&allAverageMark[0]>allAverageMark[2]){

    bestStudentOfAll.push("Tanya");
    
  }

  if(allAverageMark[1]>allAverageMark[0]&&allAverageMark[1]>allAverageMark[2]){

    bestStudentOfAll.push("Victor");


  }

  else{

    
   bestStudentOfAll.push("Anton");
    

  }
    
  });

  const result = bestStudentOfAll[0];

return result ;
}

const topStudent =  getBestStudent  (students);

console.log(topStudent);

// task 6 знайшов рішення , треба пояснити 

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
