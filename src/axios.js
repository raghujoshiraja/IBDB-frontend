import axios from "axios";

const axiosBase = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:4020/"
      : "http://143.244.136.44:4020",
});

export default axiosBase;
