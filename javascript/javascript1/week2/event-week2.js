function event(weekDay) {
  const weekDays = [
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
  today = weekDays[randomNumber];
  // calculate the date of the event
  let getEventWeekday = weekDays[(randomNumber + weekDay) % 7];
  console.log("todays weekday a " + today);
  return getEventWeekday;
}
let getEventWeekday = event(10);
console.log("the event will be held on a  " + getEventWeekday);
