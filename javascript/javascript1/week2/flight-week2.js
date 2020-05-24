function getFullname(firstname, surname, useFormalName = false) {
  const fullname1 = "lord" + " " + firstname + " " + surname;
  const fullname2 = firstname + " " + surname;

  if (useFormalName) {
    console.log(fullname1);
    return fullname1;
  } else {
    console.log(fullname2);
    return fullname2;
  }
}
getFullname("ahmed ", "ali ", true);
