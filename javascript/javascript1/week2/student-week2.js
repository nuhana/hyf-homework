const class07Students = [];
function addStudentToClass(studentName) {
  let length = class07Students.length;

  if (length > 5 && studentName !== "queen") {
    console.log("Cannot add more students to class 07");
    return;
  }
  if (studentName.trim() === "") {
    console.log("this is not a name");
    return;
  }
  if (class07Students.includes(studentName)) {
    console.log("Student" + " " + studentName + " is already in the class");
    return;
  }
  class07Students.push(studentName);
  return;
}

function getNumberOfStudents() {
  return class07Students.length;
}
