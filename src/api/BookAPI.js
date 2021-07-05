import { useState, useEffect } from "react";
import axios from "../axios";
import { toast } from "react-toast";

const BookAPI = () => {
  const [sourceBooks, setSourceBooks] = useState([]);
  const [refreshVar, setRefreshVar] = useState(false);

  useEffect(() => {
    axios
      .get("/books")
      .then((res) => setSourceBooks(res.data))
      .catch((err) => toast.error(`Unable to fetch books. ${err}`));
  }, []);

  const createNewBook = (data) => {
    axios
      .post("/books", data)
      .then(() => toast.success("Added the book successfully!"))
      .catch((err) => {
        console.error(err);
        toast.error(`Errored Out: ${err}`);
      });
  };

  const editBook = ({ id, data }) => {
    axios
      .patch(`/books/single/${id}`, data)
      .then(() => {
        toast.success("Edited the book successfully!");
        refreshBooks();
      })
      .catch((err) => {
        console.error(err);
        toast.error(`Errored Out: ${err}`);
      });
  };

  const deleteBook = (id) => {
    axios
      .delete(`/books/single/${id}`)
      .then(() => {
        toast.success("Deleted the book successfully!");
        refreshBooks();
      })
      .catch((err) => {
        console.error(err);
        toast.error(`Errored Out: ${err}`);
      });
  };

  const refreshBooks = () => setRefreshVar(!refreshBooks);

  return {
    sourceBooks: [sourceBooks, setSourceBooks],
    createNewBook,
    deleteBook,
    editBook,
    refreshBooks,
  };
};

export default BookAPI;
