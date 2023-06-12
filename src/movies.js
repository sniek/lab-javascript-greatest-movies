// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((item) => {
        return item.director;
    });
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length == 0) return 0;
    // First filter to get all the movies with steven spielberg
    const newArray = moviesArray.filter((item) => item.director == 'Steven Spielberg');
    //second filter on the new array with all the steven spielberg movies, to just show only the ones with Drama
    const lastArray = newArray.filter((item) => item.genre.includes('Drama'));
    return lastArray.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length == 0) return 0;
    let averageScoreArray = moviesArray.filter((number) => number.score).map((number) => number.score).reduce((acc, currentValue) => acc + currentValue);
    return Number((averageScoreArray / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const checkForDrama = moviesArray.filter((item) => item.genre.includes('Drama'));
    if (checkForDrama.length == 0) return 0;
    let averageDramaScore = checkForDrama.filter((item) => item.score).map((item) => item.score).reduce((acc, currentValue) => acc + currentValue);
    return Number((averageDramaScore / checkForDrama.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortByYear = moviesArray.map((item) => item).sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
    return sortByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortAlphabetically = moviesArray.map((item) => item.title).sort().slice(0, 20);
    return sortAlphabetically;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
