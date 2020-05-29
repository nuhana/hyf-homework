const travelInformation = { speed: 50, destinationDistance: 432 };

function myTravelTime(myInformation) {
  let time = myInformation.destinationDistance / myInformation.speed;
  decimalTime = time * 60 * 60;
  let hours = Math.floor(decimalTime / (60 * 60));
  decimalTime = decimalTime - hours * 60 * 60;
  let minutes = Math.floor(decimalTime / 60);
  decimalTime = decimalTime - minutes * 60;
  let seconds = Math.round(decimalTime);

  return hours + " hours and " + minutes + " minutes " + seconds + " seconds";
}
const travelTime = myTravelTime(travelInformation);
console.log(travelTime);
