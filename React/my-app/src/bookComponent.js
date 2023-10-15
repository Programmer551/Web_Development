const Book = (props) => {
  const { src, author, name, index } = props;
  // getBook(1);
  const newIndex = index + 1;

  return (
    <div className='book'>
      <h3 className='number'>{newIndex}</h3>
      <img
        src={src}
        alt='Book'
        className='img'
      />
      <h1 className='heading'>Name: {name}</h1>
      <h1 className='heading'>Author: {author}</h1>
    </div>
  );
};
export default Book;
