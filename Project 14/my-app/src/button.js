const fire = () => {
  console.log("Fire");
};
const Button = () => {
  return (
    <>
      <button onClick={fire}>A</button>
      <button onClick={fire}>B</button>
      <button onClick={fire}>C</button>
    </>
  );
};
export default Button;
