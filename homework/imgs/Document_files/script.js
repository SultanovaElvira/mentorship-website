// let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

let personalMovieDB = {
  // count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
};

// let films1 = prompt("Один из последних просмотренных фильмов?");
// let mark1 = prompt("Hа сколько оцените его?");
// let films2 = prompt("Один из последних просмотренных фильмов?");
// let mark2 = prompt("Hа сколько оцените его?");
// personalMovieDB.movies[films1]=mark1
// personalMovieDB.movies[films2]=mark2

// = `${films}:${mark}`;
// console.log(personalMovieDB.count);

// console.log(personalMovieDB.movies);
// **************************

// for (let index = 0; index < 2; index++) {
//   let films1 = prompt("Один из последних просмотренных фильмов?");
//   let mark1 = prompt("Hа сколько оцените его?");

//   if (
//     films1 === "" ||
//     mark1 === "" ||
//     films1.length > 50 ||
//     films1 === null ||
//     mark1 === null
//   ) {
//     console.log("err");
//     index--;
//   } else {
//     personalMovieDB.movies[films1] = mark1;
//   }
// }

// if (personalMovieDB.count <= 10) {
//   console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count <= 30 && personalMovieDB.count >= 11) {
//   console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 31) {
//   console.log("вы киноман");
// } else {
//   console.log("Произошла ошибка");
// }
// let i = 0;
// while (i < 2) {
//   let films1 = prompt("Один из последних просмотренных фильмов?");
//   let mark1 = prompt("Hа сколько оцените его?");
//   personalMovieDB.movies[films1] = mark1;

//   if (
//     films1 === "" &&
//     mark1 === "" &&
//     films1.length > 50 &&
//     films1 === null &&
//     mark1 === null
//   ) {
//     consommn   le.error();
//     // i--;
//   }
//   i++;
// }
// console.log(personalMovieDB.movies);

function showMyDB(params) {
  if (params == false) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let index = 1; index < 4; index++) {
    const lovelyGenre = prompt(`Ваш любимый жанр под номером ${index}`);
    personalMovieDB.genres = lovelyGenre[index];
    
  }
}

writeYourGenres()

console.log(personalMovieDB.genres)