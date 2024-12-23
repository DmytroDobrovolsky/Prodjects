class student {
    university = "DVB";
    course = 1;
    fullName = "Ostap Gnatyk";
    studentArray = [];

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

        this.offStudent = true;

    }

    recover() {

        this.offStudent = false;

    }
}

const firstStudent = new student(
    "Вищої Школи Психотерапії м.Одеса",
    " 1 ",
    "Остап Родоманський Бендер"
);

console.log(firstStudent.getInfo());

firstStudent.setStudentMark = [6, 7, 8, 9];

firstStudent.setStudentMark = 5;


console.log(firstStudent.getAverageMark());

console.log(firstStudent.studentArray);

console.log(firstStudent.dismiss());

console.log(firstStudent);




