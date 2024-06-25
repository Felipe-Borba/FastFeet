import axios from "axios";

export const api = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: import.meta.env.BASE_URL,
});
