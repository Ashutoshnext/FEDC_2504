let student = [
    { name: "Alice", age: 20, marks: { math: 85, science: 97, english: 80 } },
    { name: "Ashutosh", age: 22, marks: { math: 80, science: 90, english: 88 } },
    { name: "Rahul", age: 25, marks: { math: 95, science: 92, english: 81 } },

]
let min = -9999;
for (let i = 0; i < student.length; i++) {
    let totalMarks = 0;
    for (let subject in student[i].marks) {
        totalMarks += student[i].marks[subject];

    }

    student[i].totalMarks = totalMarks;
    student[i].averageMarks = totalMarks / 3;

    if (student[i].averageMarks > min) {
        min = student[i].averageMarks;
    }



}
console.log(min)