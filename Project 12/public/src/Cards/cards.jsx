// import { Link } from "react-router-dom";
import "./cards.css";
const Cards = ({ name, price, src, detail, id }) => {
  const fire = async (event) => {
    const userName = sessionStorage.getItem("name");
    const UserPassword = sessionStorage.getItem("password");
    const response = await fetch("http://localhost:3000/add/in/purchase", {
      method: "POST",
      body: JSON.stringify({
        user: {
          name: userName,
          password: UserPassword,
        },
        id: id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };
  if (!detail && !src) {
    return (
      <div
        className='card items'
        style={{ width: "18rem" }}>
        <img
          src='...'
          className='card-img-top'
          alt='Image is not available'
          height='250px'
        />
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <p className='card-text'>No Description Found</p>
          <h4>Price:{price}</h4>

          <button
            className='btn btn-primary'
            onClick={fire}>
            Buy in one Click
          </button>
        </div>
      </div>
    );
  }
  if (!detail) {
    return (
      <div
        className='card items'
        style={{ width: "18rem" }}>
        <img
          src={src}
          height='250px'
          className='card-img-top'
          alt='Image'
        />
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <p
            className='card-text'
            style={obj}>
            No Description Found
          </p>
          <h4>Price:{price}</h4>
          {/* <Link to='/details'> */}
          <button
            className='btn btn-primary'
            onClick={fire}>
            Buy in one Click
          </button>
          {/* </Link> */}
        </div>
      </div>
    );
  }
  if (!src) {
    return (
      <div
        className='card items'
        style={{ width: "18rem" }}>
        <img
          src=''
          className='card-img-top'
          height='250px'
          alt='Image is not available'
        />
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <p className='card-text'>{detail}</p>
          <h4>Price:{price}</h4>
          {/* <Link to='/details'> */}
          <button
            className='btn btn-primary'
            onClick={fire}>
            Buy in one Click
          </button>
          {/* </Link> */}
        </div>
      </div>
    );
  }
  return (
    <div
      className='card items'
      style={{ width: "18rem" }}>
      <img
        src={src}
        height='250px'
        className='card-img-top'
        alt='Image'
      />
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <p className='card-text'>{detail}</p>
        <h4>Price:${price}</h4>
        {/* <Link to='/details'> */}
        <button
          className='btn btn-primary'
          onClick={fire}>
          Buy in one Click
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
};
export default Cards;
