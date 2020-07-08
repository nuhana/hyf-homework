fetch(
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
)
  .then((response) => response.json())
  .then((movies) => {
    const badMovies = movies.filter((movie) => movie.rating < 7);
    console.log(badMovies);

    const badMoviesSince2000 = movies.filter(
      (movie) => movie.rating < 7 && movie.year >= 2000
    );
    console.log(badMoviesSince2000);
  })
  .catch(() => {
    console.log("error");
  });
