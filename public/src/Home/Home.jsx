import Sign_in from "../Sign_in/Sign_in";
import backgroundImage from "../Images/background.jpg";
import "./Home.css";
const divStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const Home = () => {
  return (
    <div
      className='center full-height column custom'
      style={divStyle}>
      <h1 className='heading custom'>Welcome to my Best E-Commerce Website</h1>
      <Sign_in />
    </div>
  );
};
export default Home;
