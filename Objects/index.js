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

///////////

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
