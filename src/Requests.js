const key = process.env.REACT_APP_MOVIE_DB_KEY;

const requests = {
	requestTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${key}&language=en-US`,
	requestNetflix: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=en-US&networks=Netflix&release_date.gte=2017-05-01`,
	requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US`,
	requestAction: `https://api.themoviedb.org/3/discover/movie/?api_key=${key}&with_genres=28&language=en-US`,
	requestComedy: `https://api.themoviedb.org/3/discover/movie/?api_key=${key}&with_genres=35&language=en-US`,
	requestHorror: `https://api.themoviedb.org/3/discover/movie/?api_key=${key}&with_genres=27&language=en-US`,
	requestRomance: `https://api.themoviedb.org/3/discover/movie/?api_key=${key}&with_genres=10749&language=en-US`,
	requestDocumentaries: `https://api.themoviedb.org/3/discover/movie/?api_key=${key}&with_genres=99&language=en-US`,
};

export default requests;
