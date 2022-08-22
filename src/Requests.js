const key = "a0aa5eb44f3d7898d92433972aa5afbb";

const requests = {
	requestTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${key}&language=en-US`,
	requestNetflix: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=en-US&networks=Netflix&release_date.gte=2017-05-01`,
	requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US`,
	requestAction: `https://api.themoviedb.org/3/discover/movie/?api_key=${key}&with_genres=28`,
	requestComedy: `https://api.themoviedb.org/3/discover/movie/?api_key=${key}&with_genres=35`,
	requestHorror: `https://api.themoviedb.org/3/discover/movie/?api_key=${key}&with_genres=27`,
	requestRomance: `https://api.themoviedb.org/3/discover/movie/?api_key=${key}&with_genres=10749`,
	requestDocumentaries: `https://api.themoviedb.org/3/discover/movie/?api_key=${key}&with_genres=99`,
};

export default requests;
