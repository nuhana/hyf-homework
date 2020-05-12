let volumeInMeters=8*10*10;
let gardenSizeInM2=100;
let peterHouseCost=2500000;

let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
console.log(housePrice);
if (housePrice < peterHouseCost) {
    console.log("peter is paying too much"); 
} else {
    console.log("peter is paying too little");
}


volumeInMeters=5*11*8;
gardenSizeInM2=70;
juliaHouseCost= 1000000;
 housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
 console.log(housePrice);
if (housePrice < juliaHouseCost) {
    console.log("julia is paying too much"); 
} else {
    console.log("julia is paying too little");
}
