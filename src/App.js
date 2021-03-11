import "./styles.css";
import React, { useEffect, useState } from "react";
import axiosServices from "./services/axiosServices";
import BookCard from "./components/BookCard";
import { Button } from "@material-ui/core";

export default function App() {
  const [data, setData] = useState([]);
  const [favorites, setFavorite] = useState([]);

  //Trigger on initial render
  useEffect(() => {
    axiosServices.getAll().then((initialData) => {
      setData(initialData);
    });
  }, []);

  //Triggers anytime favorites changes.
  useEffect(() => {
    console.log(favorites);
    //console.log(JSON.stringify(favorites));
  }, [favorites]);

  //User favorites a book
  const handleFavorite = (bookObj) => {
    setFavorite([...favorites, bookObj]);
  };

  //User unfavorites a book, filter out with isbn since it's unique
  const handleUnfavorite = (bookObj) => {
    const temp = favorites.filter((books) => books.isbn != bookObj.isbn);
    setFavorite(temp);
  };

  const downloadData = () => {
    const output = JSON.stringify(favorites);
    const blob = new Blob([output]);
    const fileDownloadUrl = URL.createObjectURL(blob);
    window.open(fileDownloadUrl);
    URL.revokeObjectURL(fileDownloadUrl);
  };

  return (
    <div className="App">
      <Button
        className="exportButton"
        variant="contained"
        color="primary"
        onClick={() => downloadData()}
      >
        Export Favorites
      </Button>
      {data.map((bookObject) => (
        <BookCard
          key={bookObject.isbn}
          bookObject={bookObject}
          name={bookObject.name}
          author={bookObject.authors}
          publisher={bookObject.publisher}
          released={bookObject.released}
          numberOfPages={bookObject.numberOfPages}
          handleFavorite={handleFavorite}
          handleUnfavorite={handleUnfavorite}
        />
      ))}
    </div>
  );
}
