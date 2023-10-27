import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8080/laravel8-react-stickies",
  withCredentials: true,
});

http.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    console.log(message);
    return Promise.reject(error);
  }
);

export { http };
