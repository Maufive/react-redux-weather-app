import axios from 'axios';

const API_KEY = 'a91a892f1f2a1aa3f7409a78f72af675';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},se`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}