console.log(movies[0]);
//task 1
const shortTitle = movies.filter((movie) => {
  const movieArray = movie.title.split(" ");
  if (movieArray.length < 3) {
    return movieArray;
  }
});
console.log("movies with a short title are :");
console.log(shortTitle);

//task 2
const longeTitle = movies.filter((movie) => {
  const movieArray = movie.title.split(" ");
  if (movieArray.length >= 3) {
    return movieArray;
  }
});
console.log("movies with a long title are :");
console.log(longeTitle);

//task 3
const moviesMadeBetween = movies.filter(
  (movie) => movie.year >= 1980 && movie.year <= 1989
).length;
console.log("number of movies made between 1980-1989 are :");
console.log(moviesMadeBetween);

//task 4
const moviesWithTag = movies.filter((movie) => {
  if (movie.rating >= 7) return (movie.tag = "Good");
  if (movie.rating >= 4 && movie.rating < 7) return (movie.tag = "Average");
  if (movie.rating < 4) return (movie.tag = "Bad");
});
console.log(moviesWithTag);

//task 5
const getRating = movies
  .filter((movie) => movie.rating > 6)
  .map(
    (movie) =>
      `movies has rating more than 6 are :` +
      movie.title +
      " with rating " +
      movie.rating
  );
console.log(getRating);

//task 6
let count = 0;
const getMoviesKeyword = movies.filter((movie) => {
  const movieArray = movie.title.toLowerCase().split(" ");

  if (
    movieArray.includes("surfer") ||
    movieArray.includes("alien") ||
    movieArray.includes("Benjamin")
  ) {
    count++;
    return count;
  }
});
console.log("number of the keywords surfer,Alien ,Benjamin " + count);

//task 7

const getDuplicateWord = movies.filter((movie) => {
  var duplicateWord = /\b(\w+)\b.*\b\1\b/g.test(movie.title);
  return duplicateWord;
});
console.log(getDuplicateWord);

//task 8
const avgRating = movies
  .reduce((sum, movie) => sum + movie.rating / movies.length, 0)
  .toFixed(2);
console.log(avgRating);
