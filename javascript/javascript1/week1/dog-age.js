let dogYearOfBirth=2018;
let dogYearFuture=2045;
let dogYear=dogYearFuture-dogYearOfBirth;

console.log(dogYear);
let shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
    console.log('Your dog will be ' + dogYear*7 + ' dog years old in ' + dogYearFuture);
} else {
    console.log('Your dog will be ' + dogYear + 'human years old in ' + dogYearFuture);
}

