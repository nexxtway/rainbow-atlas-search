
const ENDPOINT_URL = process.env.REACT_APP_ENDPOINT_URL;

const fetchMovies = async (query) => {
    if (query !== '') {
        const res = await fetch(`${ENDPOINT_URL}/movies/search?query=${query}`);
        return res.json();
    } 
    return Promise.resolve([]);    
};

export default fetchMovies;