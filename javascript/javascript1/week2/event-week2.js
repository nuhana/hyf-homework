function event(weekDay) {
  const myArr = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  // the system give random day
  const randomNumber = Math.floor(Math.random() * 7) + 0;
  today = myArr[randomNumber];
  // calculate the date of the event
  let getEventWeekday = myArr[(randomNumber + weekDay) % 7];
  console.log("todays weekday a " + today);
  return getEventWeekday;
}
let getEventWeekday = event(10);
console.log("the event will be held on a  " + getEventWeekday);
