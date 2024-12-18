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


getInfo(){

    const res = this.course+" " + this.university + "," + this.fullName;    

    return res;
}

}

const firstStudent = new student("Вищої Школи Психотерапії м.Одеса","Студент 1 курсу","Остап Родоманський Бендер");

console.log(firstStudent.getInfo());

firstStudent.marksArray = [5, 4, 4, 5];

console.log(firstStudent.marksArray);

