const travelInformation = { speed: 50, destinationDistance: 432 };

function myTravelTime(myInformation) {
  const time = myInformation.destinationDistance / myInformation.speed;
  let decimalTime = time * 60 * 60;
  const hours = Math.floor(decimalTime / (60 * 60));
  decimalTime = decimalTime - hours * 60 * 60;
  const minutes = Math.floor(decimalTime / 60);
  decimalTime = decimalTime - minutes * 60;
  const seconds = Math.round(decimalTime);

  return hours + " hours and " + minutes + " minutes " + seconds + " seconds";
}
const travelTime = myTravelTime(travelInformation);
console.log(travelTime);
