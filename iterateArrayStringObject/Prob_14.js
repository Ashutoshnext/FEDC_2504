let students = [
    { name: "Alice", marks: 45, subject: "Math" },
    { name: "Bob", marks: 75, subject: "Science" },
    { name: "Charlie", marks: 50, subject: "English" },
    { name: "David", marks: 30, subject: "History" }
  ];
  
  for(let i = 0; i < students.length; i++) {
    let student = students[i];
    if (student.marks >= 50) {
      console.log(student.name + "-" + student.subject);
    } 
  }