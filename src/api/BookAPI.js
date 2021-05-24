import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import _ from "lodash";

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
  const [currentBook, setCurrentBook] = useState(false);
  const [currentBookInfo, setCurrentBookInfo] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sourceBooks, setSourceBooks] = useState([]);

  useEffect(() => {
    setSourceBooks(books);
  }, []);

  useEffect(() => {
    // Search function
    if (!searchTerm) return setSourceBooks(books);
    console.log("Searched", searchTerm);
    setSourceBooks(
      _.filter(books, ({ name }) => {
        // Advanced Search (checks if serach term and match have all characters in common)
        return [...searchTerm.toLowerCase()].every((char) => {
          return [...name.toLowerCase()].includes(char);
        });
      })
    );
  }, [searchTerm]);

  useEffect(() => {
    if (!currentBook) return;

    // Using lodash here bcoz Javascript is broken and its errors are stupid
    setCurrentBookInfo(_.find(books, { id: currentBook }));
  }, [currentBook, currentBookInfo]);

  return {
    books: sourceBooks,
    currentBook: [currentBook, setCurrentBook],
    currentBookInfo: [currentBookInfo, setCurrentBookInfo],
    search: [searchTerm, setSearchTerm],
  };
};

export default BookAPI;
