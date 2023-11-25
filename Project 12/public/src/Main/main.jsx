import "./main.css";
import backgroundImage from "../Images/background.jpg";
import cart_logo from "../Images/cart_logo.png";
import cart_image from "../Images/cart_image.jpg";
import cart_image2 from "../Images/cart_image2.jpg";
import Cards from "../Cards/cards";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
const Main = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/get/all");
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    // width:"200vw",

    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      className='main full-height'
      style={divStyle}>
      <nav className='navbar'>
        <h1 className='title headings'>E-Commerce</h1>
        <ul className='nav-ul'>
          <li className='nav-li'>Home</li>
          <div className='line'></div>
          <li className='nav-li'>About</li>
          <div className='line'></div>
          <li className='nav-li'>Contact us</li>
          <div className='line'></div>
          <li className='nav-li'>Services</li>
          <div className='line'></div>
        </ul>
      </nav>
      <div className='search center'>
        <Link to='/'>
          <button className='btn btn-primary'>Sign</button>
        </Link>
        <Link to='/login'>
          <button className='btn btn-primary'>Login</button>
        </Link>
        <form className='search-form center'>
          <input
            type='search'
            id='inputPassword5'
            className='form-control'
            placeholder='Search Here'
            aria-describedby='passwordHelpBlock'
          />
          <input
            type='submit'
            className='btn btn-secondary'
            value='Search'
          />
        </form>
        <img
          src={cart_logo}
          alt='Cart Logo'
          width='45px'
          className='cart'
        />
      </div>
      <div className='card text-bg-dark'>
        <img
          src={cart_image}
          className='card-img'
          alt='Cart Image'
        />
        <div className='card-img-overlay'>
          <h5 className='card-title black'>
            Welcome to the world best E-Commerce Website
          </h5>
          <p className='card-text black'>
            You can get here the world best item at reasonable price.
          </p>
          <p className='card-text black'>
            <small>Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div className='card text-bg-dark'>
        <img
          src={cart_image2}
          className='card-img'
          alt='Cart Image'
        />
        <div className='card-img-overlay'>
          <h5 className='card-title black'>Best Security</h5>
          <p className='card-text black'>
            This E-Commerce website provide full privacy your data is impossible
            to leak from here.
          </p>
          <p className='card-text black'>
            <small>Last updated 2 mins ago</small>
          </p>
        </div>
      </div>
      <div className='collection center'>
        {data.map((item) => {
          const { _id, name, src, detail, price } = item;
          return (
            <Cards
              key={_id}
              name={name}
              src={src}
              detail={detail}
              price={price}
              id={_id}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
export default Main;
