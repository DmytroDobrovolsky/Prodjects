class student {
    university = "DVB";
    course = 1;
    fullName = "Ostap Gnatyk";

    studentArray = [];

    offStudent = false;

    constructor(university, course, fullName) {
        this.university = university;

        this.course = course;

        this.fullName = fullName;
    }

    set setStudentMark(mark) {

        Array.isArray(mark);

        if (this.offStudent === false) {

            if (Array.isArray(mark) === true) {
                this.studentArray.push(...mark);
            }

            if (Array.isArray(mark) === false) {
                this.studentArray.push(mark);
            }
            return this.studentArray;
        }

        else {
            return null;
        }
    }

    get getRetArr() {

        if (this.offStudent === false) {

            return this.studentArray;

        }

        else {

            return null;
        }

    }

    getInfo() {
        const res = "Студент" + this.course + "курсу" + " " + this.university + "," + this.fullName;

        return res;
    }

    getAverageMark() {
        let support = 0;

        for (let i = 0; i < this.studentArray.length; i++) {
            support += this.studentArray[i];
        }

        if (this.studentArray.length === 0) return "No marks";

        const averMark = support / this.studentArray.length;

        return averMark;
    }

    dismiss() {

        this.offStudent = false;

    }

    recover() {

        this.offStudent = false;

    }


}

class BudgetStudent extends student {
    constructor(university, course, fullName) {

      super(university, course, fullName); 

   this.intervalId = setInterval(() => this.getScholarship(), 30000);


    }


    getScholarship(){

console.log();


        if(this.getAverageMark() >= 4 && this.offStudent === false){

         console.log( "Ви отримали 1400 грн. стипендії");
        
        }

        else {

            return;

        }
    }

}


const firstStudent = new student(
    "Вищої Школи Психотерапії м.Одеса",
    " 1 ",
    "Остап Родоманський Бендер"
);

const secondStudent = new BudgetStudent( "Вищої Школи Психотерапії м.Одеса",
    " 1 ",
    "Остап Родоманський Бендер");

firstStudent.setStudentMark = [4,4,4];

firstStudent.setStudentMark = 4;

secondStudent.setStudentMark = [4,4,4];

secondStudent.setStudentMark = 4;

console.log(firstStudent.getInfo());

console.log(firstStudent.getAverageMark());

console.log();







