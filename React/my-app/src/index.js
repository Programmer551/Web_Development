import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { books } from "./books";
import Book from "./bookComponent";
// Books App

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  return (
    <>
      <div className='title'>
        <h1>Self Improvement Books</h1>
      </div>
      <div className='booklist'>
        {books.map((book, index) => {
          return (
            <Book
              {...book}
              key={book.id}
              getBook={getBook}
              index={index}></Book>
          );
        })}
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
