import { useState, useEffect } from "react";
import axios from "../axios";
import { toast } from "react-toast";

const AuthorAPI = () => {
  const [sourceAuthors, setSourceAuthors] = useState([]);

  useEffect(() => {
    axios
      .get("/authors")
      .then((res) => setSourceAuthors(res.data))
      .catch((err) => toast.error(`Unable to fetch Authors. ${err}`));
  }, []);

  return {
    sourceAuthors: [sourceAuthors, setSourceAuthors],
  };
};

export default AuthorAPI;
