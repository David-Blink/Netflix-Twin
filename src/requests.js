const APIKEY = "099df71f1c6d984e895eb1f3ef6866ad";

const requests = {
    fetchNetFlixOriginals:`/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTreding: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchHorroMovies:`/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchRomanticMovies:`/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${APIKEY}&with_genres=99`
}

export default requests;