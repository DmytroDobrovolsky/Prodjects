class  student {

    university = "DVB";

    course = "Студент 1 курсу";

    fullName = "Ostap Gnatyk";

    constructor(university,course,fullName) {

        this.university = university;

        this.course = course;

        this.fullName = fullName;
        
    }

 set marksArray (array){

    this.array = array ;

}

set studentMark (mark){

    this.mark = mark ;

}

get addMark (){

     this.array.push(this.mark);

     return this.array;
}


getInfo(){

    const res = this.course+" " + this.university + "," + this.fullName;    

    return res;
}

getAverageMark(){

let support = 0;

for (let i = 0; i<this.array.length;i++){

    support += this.array[i];

}

const averMark = support/this.array.length;

return averMark;

} 

dismiss(){

this.offStudent = true;

if (this.offStudent = true) {

    this.array = 0;
    this.mark = 0;
    

}
return this.array;
}
set newMarksArray (newArray){

    this.newArray = newArray ;

}

set newStudentMark (newMark){

    this.newMark = newMark ;

}

recover(){

this.offStudent = false;

if (this.offStudent=false) {

 this.newArray = [5, 4, 4, 5];

this.newMark = 5;
    
this.newArray.push(newMark);
}

return this.newArray ;
}

}


const firstStudent = new student("Вищої Школи Психотерапії м.Одеса","Студент 1 курсу","Остап Родоманський Бендер");

console.log(firstStudent.getInfo());

firstStudent.marksArray = [5, 4, 4, 5];

firstStudent.mark = 5;

console.log(firstStudent.addMark);

console.log(firstStudent.getAverageMark());

console.log(firstStudent.dismiss());

console.log(firstStudent.recover());

firstStudent.offStudent = 0;

firstStudent.newArray = 0;

firstStudent.newMark = 0;




