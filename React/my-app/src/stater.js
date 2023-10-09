// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./style.css";
// // Correct Method

// // const Greeting = () => {
// //   return (
// //     <>
// //       <div className='hello'>
// //         <h1>First React Component</h1>
// //       </div>
// //       <div>
// //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
// //         ratione explicabo omnis aliquid hic obcaecati, dolore quia assumenda
// //         beatae in soluta laboriosam.
// //       </div>
// //       <hr />
// //     </>
// //   );
// // };

// // Wrong Method

// // const Greeting = () => {
// //   return React.createElement("h1", {}, "Hello World");
// // };
// // function Greeting() {
// //   return React.createElement(
// //     "div",
// //     {},
// //     React.createElement("h1", {}, "Hello World")
// //   );
// // }

// // Books App

// const BookList = () => {
//   return (
//     <>
//       <div className='title'>
//         <h1>Self Improvement Books</h1>
//       </div>
//       <div className='booklist'>
//         <Book />
//         <Book />
//         <Book />
//       </div>
//     </>
//   );
// };
// const Book = () => {
//   return (
//     <div className='book'>
//       <Image></Image>
//       <Name></Name>
//       <Author></Author>
//     </div>
//   );
// };

// const Image = () => {
//   return (
//     <img
//       src='./images/book-1.jpg'
//       alt='Book'
//       className='img'
//     />
//   );
// };
// const Name = () => {
//   return <h1 className='heading'>Name: Think and Grow Rich</h1>;
// };
// const Author = () => <h1 className='heading'>Author: Nepoleon Hill</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<BookList />);
