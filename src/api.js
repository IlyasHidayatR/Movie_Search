import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY
const baseUrl = process.env.REACT_APP_BASEURL

export const getMovies = async () => {
    const response = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);  
    return response.data.results;
}

export const searchMovies = async (query) => {
    const response1 = await axios.get(`${baseUrl}/search/movie?api_key=${apiKey}&query=${query}`);
    return response1.data.results;
}