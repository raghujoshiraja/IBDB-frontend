import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import axios from "../axios";
import { toast } from "react-toast";

const books = [
  {
    name: "Princess of Narnia",
    id: uuid(),
  },
  {
    name: "Harry Potter",
    id: uuid(),
  },
  {
    name: "The American Dream",
    id: uuid(),
  },
  {
    name: "Never have I ever",
    id: uuid(),
  },
  {
    name: "Why do people cry",
    id: uuid(),
  },
  {
    name: "Should you smoke?",
    id: uuid(),
  },
  {
    name: "Princess of Narnia",
    id: uuid(),
  },
  {
    name: "Princess of Narnia",
    id: uuid(),
  },
  {
    name: "Princess of Narnia",
    id: uuid(),
  },
  {
    name: "Harry Potter",
    id: uuid(),
  },
  {
    name: "The American Dream",
    id: uuid(),
  },
  {
    name: "Never have I ever",
    id: uuid(),
  },
  {
    name: "Why do people cry",
    id: uuid(),
  },
  {
    name: "Should you smoke?",
    id: uuid(),
  },
  {
    name: "Princess of Narnia",
    id: uuid(),
  },
  {
    name: "Princess of Narnia",
    id: uuid(),
  },
  {
    name: "Princess of Narnia",
    id: uuid(),
  },
  {
    name: "Harry Potter",
    id: uuid(),
  },
  {
    name: "The American Dream",
    id: uuid(),
  },
  {
    name: "Never have I ever",
    id: uuid(),
  },
  {
    name: "Why do people cry",
    id: uuid(),
  },
  {
    name: "Should you smoke?",
    id: uuid(),
  },
  {
    name: "Princess of Narnia",
    id: uuid(),
  },
  {
    name: "Princess of Narnia",
    id: uuid(),
  },
];

const BookAPI = () => {
  const [sourceBooks, setSourceBooks] = useState([]);

  useEffect(() => {
    axios
      .get("/books")
      .then((res) => setSourceBooks(res.data))
      .catch((err) => toast.error(`Unable to fetch books. ${err}`));
  }, []);

  return {
    books: sourceBooks,
    sourceBooks: [sourceBooks, setSourceBooks],
  };
};

export default BookAPI;
