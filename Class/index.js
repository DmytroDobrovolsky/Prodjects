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

/*getAverageMark(addMark){

let support = 0;

for (let i = 0; i<addMark.length;i++){

    support += i;

}

const averMark = this.array/support;

return averMark;

} */



}

const firstStudent = new student("Вищої Школи Психотерапії м.Одеса","Студент 1 курсу","Остап Родоманський Бендер");

console.log(firstStudent.getInfo());

firstStudent.marksArray = [5, 4, 4, 5];

firstStudent.mark = 5;

console.log(firstStudent.addMark);

console.log(firstStudent.getAverageMark());



