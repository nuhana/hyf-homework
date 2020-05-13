const dogYearOfBirth = 2018;
const dogYearFuture = 2045;
const dogYear = dogYearFuture - dogYearOfBirth;

console.log(dogYear);
const shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
  console.log(
    "Your dog will be " + dogYear * 7 + " dog years old in " + dogYearFuture
  );
} else {
  console.log(
    "Your dog will be " + dogYear + "human years old in " + dogYearFuture
  );
}
