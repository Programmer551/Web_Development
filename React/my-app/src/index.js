import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
const name = "Think and Grow Rich";
const author = "Nepoleon Hill";
// Books App

const BookList = () => {
  return (
    <>
      <div className='title'>
        <h1>Self Improvement Books</h1>
      </div>
      <div className='booklist'>
        <Book />
        <Book />
        <Book />
      </div>
    </>
  );
};
const Book = () => {
  return (
    <div className='book'>
      <Image></Image>
      <Name></Name>
      <Author></Author>
    </div>
  );
};

const Image = () => {
  return (
    <img
      src='./images/book-1.jpg'
      alt='Book'
      className='img'
    />
  );
};
const Name = () => {
  return <h1 className='heading'>Name: {name}</h1>;
};
const Author = () => <h1 className='heading'>Author: {author}</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
