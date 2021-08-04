import { useState, useEffect } from "react";
import axios from "../axios";
import { toast } from "react-toast";

const AuthorsAPI = () => {
  const [sourceAuthors, setSourceAuthors] = useState([]);
  const [refreshVar, setRefreshVar] = useState(false);

  useEffect(() => {
    axios
      .get("/authors")
      .then((res) => setSourceAuthors(res.data))
      .catch((err) => toast.error(`Unable to fetch Authors. ${err}`));
  }, [refreshVar]);

  const createNewAuthor = (data) => {
    console.log(data);
    axios
      .post("/authors", data)
      .then(() => {
        toast.success("Added the Author successfully!");
        refreshAuthors();
      })
      .catch((err) => {
        console.error(err);
        toast.error(`Errored Out: ${err}`);
      });
  };

  const editAuthor = ({ id, data }) => {
    axios
      .patch(`/authors/single/${id}`, data)
      .then(() => {
        toast.success("Edited the Author successfully!");
        refreshAuthors();
      })
      .catch((err) => {
        console.error(err);
        toast.error(`Errored Out: ${err}`);
      });
  };

  const deleteAuthor = (id) => {
    axios
      .delete(`/authors/single/${id}`)
      .then(() => {
        toast.success("Deleted the Author successfully!");
        refreshAuthors();
      })
      .catch((err) => {
        console.error(err);
        toast.error(`Errored Out: ${err}`);
      });
  };

  const refreshAuthors = () => setRefreshVar(!refreshVar);

  return {
    sourceAuthors: [sourceAuthors, setSourceAuthors],
    refreshAuthors: refreshAuthors,
    createNewAuthor: createNewAuthor,
    editAuthor: editAuthor,
    deleteAuthor: deleteAuthor,
  };
};

export default AuthorsAPI;
