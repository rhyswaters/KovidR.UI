//import $axios from '../helpers/axios-instance';
import axios from 'axios';

//const baseUrl = process.env.API_ADMIN_URL;
const baseUrl = 'https://api.kovidr.ie';
//const baseUrl = 'http://34.242.79.116';

function getHeaders(token) {
  return { Authorization: 'Bearer ' + token,
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          Accept: 'application/json'  };
}


const axiosInstance = axios.create();

const api = {
  getResultsByDaysWon(token) {
    return axiosInstance.get(`/api/v1/Guess/GetResultsByDaysWon?from=2022-01-01`, { baseURL: baseUrl, headers : getHeaders(token)});
  },
  getResultsList(numResultsToFetch, token) {
    return axiosInstance.get(`api/v1/Guess/GetResultsList/${numResultsToFetch}`, { baseURL: baseUrl, headers : getHeaders(token) });
  },
  hasUserSubmittedNextGuess(token) {
    return axiosInstance.get(`api/v1/Guess/HasUserSubmittedNextGuess`, { baseURL: baseUrl, headers : getHeaders(token) });
  },
  createGuess(guess, token) {
    return axiosInstance.post('api/v1/Guess/CreateGuess/', guess, { baseURL: baseUrl, headers : getHeaders(token) });
  },
};

export default api;
