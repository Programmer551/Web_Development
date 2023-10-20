import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.log(error);
        setError(true);
      }
      setLoading(false);
    };
    fetchdata();
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>There was an error...</h1>;
  }
  const { avatar_url, company, name, bio } = user;
  return (
    <div className='container'>
      <img
        src={avatar_url}
        alt='Image'
        style={{ width: "150px", borderRadius: "25px" }}
      />
      <h2>{company}</h2>
      <h4>{name}</h4>
      <p>{bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
