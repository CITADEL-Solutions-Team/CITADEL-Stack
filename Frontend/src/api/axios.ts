import axios from "axios";

export const instance = axios.create({
  baseURL: 'https://citadelsolutions.tech',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});