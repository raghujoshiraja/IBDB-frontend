import axios from "axios";

const axiosBase = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:4020/"
      : "https://sites.mohityadav.codes/api/ibdb",
});

export default axiosBase;
