let count = 0;
const event = () => {
  count++;
  console.log(count);
};
const ErrorExample = () => {
  return (
    <div className='container'>
      <button
        onClick={event}
        className='btn'>
        Click ME
      </button>
      <h1>{count}</h1>
    </div>
  );
};

export default ErrorExample;
