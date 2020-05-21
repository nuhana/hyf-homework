function getFullname(firstname, surname, useFormalName) {
  const fullname1 = "lord" + " " + firstname + " " + surname;
  const fullname2 = firstname + " " + surname;

  if (useFormalName) {
    return fullname1;
  } else {
    return fullname2;
  }
}
getFullname(" ", " ", true);
