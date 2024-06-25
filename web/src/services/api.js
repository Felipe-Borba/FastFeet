import axios from "axios";

export const api = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process?.env?.REACT_BASE_URL ?? "http://localhost:3333",
});
