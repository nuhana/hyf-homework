const seriesDurations = [
  {
    title: "friends",
    days: 4,
    hours: 2,
    minutes: 20,
  },
  {
    title: "game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
];

function logOutSeriesText() {
  // write code here
  let years = 80;
  let total = 0;
  let day;
  let hour;
  let minute;
  //converting all values to seconds
  let year = years * 12 * 30 * 24 * 60 * 60;
  for (let i = 0; i < seriesDurations.length; i++) {
    day = seriesDurations[i].days * 24 * 60 * 60;
    hour = seriesDurations[i].hours * 60 * 60;
    minute = seriesDurations[i].minutes * 60;
    total = ((day + hour + minute) / year) * 100;
    console.log(
      seriesDurations[i].title + " " + "took " + total + "% of my life"
    );
    total++;
  }
}
logOutSeriesText(); // logs out the text
