import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://enigmatic-mesa-82837.herokuapp.com/"
    : "http://localhost:3000/";

export const api = axios.create({
  baseURL,
});
