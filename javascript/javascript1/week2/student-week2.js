const class07Students = [];
function addStudentToClass(studentName) {
  let length = class07Students.length;

  let i = 0;
  if (studentName === "queen") {
    let m = class07Students.push("queen");
    return;
  } else if (length > 5) {
    alert("Cannot add more students to class 07");
    return;
  } else if (class07Students[i] === studentName) {
    alert("Student" + " " + studentName + " is already in the class");
    i++;
    return;
  } else if (studentName === "") {
    alert("this is not a name");
    return;
  } else {
    let s = class07Students.push(studentName);
    return;
  }
}
function getNumberOfStudents() {
  let numberOfStudents = class07Students.length;
  for (let i = 1; i <= numberOfStudents; i++) {
    console.log(class07Students[i]);
  }
  return numberOfStudents;
}
getNumberOfStudents();
