const tmdbKey = '28e3ae3c12baf98c9f0b79d47dc08ce9';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

const getGenres = async () => {
	const genreRequestEndpoint = '/genre/movie/list';
	const requestParams = `?api_key=${tmdbKey}`;
	const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;

	try {
		const response = await fetch(urlToFetch);
		if (response.ok) {
			const jsonResponse = await response.json();
			// console.log(jsonResponse);
			const genres = jsonResponse.genres;
			// console.log(genres);
			return genres;
		}
	} catch(error) {
		console.log(error);
	}
};

const getMovies = async () => {
	const selectedGenre = getSelectedGenre();
	const discoverMovieEndpoint = '/discover/movie';
	const requestParams = `?api_key=${tmdbKey}&with_genres=${selectedGenre}`;
	const urlToFetch = `${tmdbBaseUrl}${discoverMovieEndpoint}${requestParams}`;

	try {
		const response = await fetch(urlToFetch);
		if(response.ok) {
			const jsonResponse = await response.json();
			// console.log(jsonResponse);
			const movies = jsonResponse.results;
			// console.log(movies);
			return movies;
		}
	} catch(error) {
		console.log(error);
	}
};

const getMovieInfo = () => {};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = () => {
	const movieInfo = document.getElementById('movieInfo');
	if (movieInfo.childNodes.length > 0) {
		clearCurrentMovie();
	}
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;