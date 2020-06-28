import axios from 'axios';

const BaseUrlGifts = 'https://api.giphy.com/v1/gifs/'
const APIKEY = '&api_key=A8xMXqzieIHmtO3BjGLAtf1daSSDAv8K'

export const callFetch = async ({ url, method, data ={}, headers ={} }) => axios({
    method,
    url: BaseUrlGifts+url+APIKEY,
    data,
    headers
  })