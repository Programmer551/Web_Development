import "./cards.css";
const Cards = ({ name, price, src, detail }) => {
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
          <a
            href='#'
            className='btn btn-primary'>
            Buy in one Click
          </a>
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
          <p className='card-text'>No Description Found</p>
          <h4>Price:{price}</h4>
          <a
            href='#'
            className='btn btn-primary'>
            Buy in one Click
          </a>
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
          <a
            href='#'
            className='btn btn-primary'>
            Buy in one Click
          </a>
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
        <a
          href='#'
          className='btn btn-primary'>
          Buy in one Click
        </a>
      </div>
    </div>
  );
};
export default Cards;
