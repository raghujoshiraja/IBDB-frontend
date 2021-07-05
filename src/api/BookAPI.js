import { useState, useEffect } from "react";
import axios from "../axios";
import { toast } from "react-toast";

const BookAPI = () => {
  const [sourceBooks, setSourceBooks] = useState([]);

  useEffect(() => {
    axios
      .get("/books")
      .then((res) => setSourceBooks(res.data))
      .catch((err) => toast.error(`Unable to fetch books. ${err}`));
  }, []);

  const createNewBook = (data) => {
    axios
      .post("/books", data)
      .then(toast.success("Added the book successfully!"))
      .catch((err) => toast.error(`Errored Out: ${err}`));
  };

  return {
    sourceBooks: [sourceBooks, setSourceBooks],
    createNewBook,
  };
};

export default BookAPI;
