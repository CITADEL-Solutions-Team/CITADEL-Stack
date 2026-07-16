import axios from "axios";

export const instance = axios.create({
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
  validateStatus: () => true,
});