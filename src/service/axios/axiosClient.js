import axios from "axios";

const clinet = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
});

export default clinet;
