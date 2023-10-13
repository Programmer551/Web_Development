const Book = (props) => {
  const { src, author, name, getBook, id } = props;
  // getBook(1);
  const getSingleBook = () => {
    getBook(id);
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
      <button onClick={getSingleBook}>Click ME</button>
    </div>
  );
};
export default Book;
