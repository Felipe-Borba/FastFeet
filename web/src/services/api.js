import axios from "axios";

export const api = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: import.meta.env.API_BASE_URL,
});
