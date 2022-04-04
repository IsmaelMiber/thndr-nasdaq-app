import axios from "axios";

const AUTH_TOKEN = "plrwktaFalgwzytzRc5hU8625gxyps3I";
const BASE_URL = "https://api.polygon.io/";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`
  },
});

export function addTokenToURI(uri) {
  return `${uri}?apiKey=${AUTH_TOKEN}`.trim();
}