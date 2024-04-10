import axios from "axios";

const url = "http://localhost:5000"; 
console.log(url);

const instance = axios.create({
  baseURL: url,
});

// for sending token in request header
// currently not in use
instance.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("user")).token
    }`;
  }

  return req;
});

export default instance;