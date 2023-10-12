import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

// Books App
const books = [
  {
    name: "Think and Grow Rich",
    author: "Nepolean Hill",
    src: "./images/book-1.jpg",
    id: 1,
  },
  {
    name: "Rich Dad Poor Dad",
    author: "Robort Kiyosaki",
    id: 2,
    src: "./images/book-2.jpg",
  },
  {
    name: "The 7 Habits of Highly Effective People",
    author: "Robert R Convey",
    id: 3,
    src: "./images/book-3.jpg",
  },
];

const BookList = () => {
  return (
    <>
      <div className='title'>
        <h1>Self Improvement Books</h1>
      </div>
      <div className='booklist'>
        {books.map((book) => {
          return (
            <Book
              {...book}
              key={book.id}></Book>
          );
        })}
      </div>
    </>
  );
};

const Book = (props) => {
  const { src, author, name } = props;

  const display = () => {
    console.log(name);
  };
  return (
    <div className='book'>
      <img
        src={src}
        alt='Book'
        className='img'
      />
      <h1 className='heading'>Name: {name}</h1>
      <h1 className='heading'>Author: {author}</h1>
      <button onClick={display}>Click ME</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
