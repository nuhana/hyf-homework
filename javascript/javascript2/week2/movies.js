const movies = [
  { title: "'71", year: 2014, rating: 7.2, votes: 41702, running_times: 5940 },
  {
    title: "'A' gai wak",
    year: 1983,
    rating: 7.4,
    votes: 11942,
    running_times: 6300,
  },
  {
    title: "'Surfer' Morant",
    year: 1980,
    rating: 7.9,
    votes: 10702,
    running_times: 6420,
  },
  {
    title: "'Crocodile' Dundee II",
    year: 1988,
    rating: 5.5,
    votes: 47180,
    running_times: 6480,
  },
  {
    title: "(500) Days of Summer",
    year: 2009,
    rating: 7.7,
    votes: 412368,
    running_times: 5700,
  },
  {
    title: "*batteries not included",
    year: 1987,
    rating: 6.6,
    votes: 25636,
    running_times: 6360,
  },
  {
    title: "...E tu vivrai nel terrore! L'aldilà",
    year: 1981,
    rating: 6.9,
    votes: 16484,
    running_times: 5220,
  },
  {
    title: "...and justice for all.",
    year: 1979,
    rating: 7.4,
    votes: 25408,
    running_times: 7140,
  },
  { title: "10", year: 1979, rating: 6, votes: 13152, running_times: 7320 },
  {
    title: "10 Cloverfield Lane",
    year: 2016,
    rating: 3.2,
    votes: 216151,
    running_times: 6240,
  },
  ,
  {
    title: "28 Days Later...",
    year: 2002,
    rating: 7.6,
    votes: 323591,
    running_times: 6780,
  },
  {
    title: "28 Weeks later",
    year: 2007,
    rating: 7,
    votes: 228033,
    running_times: 6000,
  },
  { title: "2:22", year: 2017, rating: 5.7, votes: 10266, running_times: 5880 },
  {
    title: "The three men and the pistol",
    year: 2014,
    rating: 6.2,
    votes: 75906,
    running_times: 7380,
  },
  {
    title: "Idiots Idiots",
    year: 2009,
    rating: 8.4,
    votes: 256619,
    running_times: 10200,
  },
  {
    title: "3 Men and a Baby",
    year: 1987,
    rating: 5.9,
    votes: 39924,
    running_times: 6120,
  },

  {
    title: "3000 Miles Alien Graceland",
    year: 2001,
    rating: 5.9,
    votes: 39646,
    running_times: 7500,
  },
  {
    title: "Star Wars: The Clone Wars",
    year: 2002,
    rating: 5.6,
    votes: 64777,
    running_times: 5760,
  },
  { title: "42", year: 2013, rating: 7.5, votes: 71968, running_times: 7680 },
  {
    title: "45 Alien",
    year: 2015,
    rating: 7.1,
    votes: 24269,
    running_times: 5460,
  },
];
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
const moviesNumber = movies.filter(
  (movie) => movie.year >= 1980 && movie.year <= 1989
).length;
console.log("number of movies made between 1980-1989 are :");
console.log(moviesNumber);

//task 4
const addKeyTag = movies.filter((movie) => {
  if (movie.rating >= 7) return (movie.tag = "Good");
  if (movie.rating >= 4 && movie.rating < 7) return (movie.tag = "Average");
  if (movie.rating < 4) return (movie.tag = "Bad");
});
console.log(addKeyTag);

//task 5
const getRating = movies
  .filter((movie) => movie.rating > 6)
  .map((movie) => "movies has rating more than 6 are :" + movie.rating);
console.log(getRating);

//task 6
let count = 0;
const getMoviesKeyword = movies.filter((movie) => {
  if (
    movie.title.toLowerCase().includes("surfer") ||
    movie.title.toLowerCase().includes("alien") ||
    movie.title.toLowerCase().includes("Benjamin")
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
const ratingLength = movies.filter((movies) => {
  return movies.rating;
});
var avgRating =
  movies.reduce((sum, movies) => {
    return sum + movies.rating;
  }, 0) / ratingLength.length;
console.log(avgRating);
