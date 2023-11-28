import { useEffect, useState } from "react";
import "./Cart.css";
const Cart = () => {
  // fetchAllData(data);
  const [data, setData] = useState([]);
  const name = sessionStorage.getItem("name");
  const password = sessionStorage.getItem("password");
  const [bool, setBool] = useState(true);
  const FetchData = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/get/single/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const dat = await response.json();
      console.log("Fetched data:", dat); // Log fetched data for each ID
      return dat;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  const fetchAllData = async (ids) => {
    try {
      const promises = ids.map((id) => FetchData(id));
      const results = await Promise.all(promises);
      console.log("All fetched data:", results); // Log all fetched data
      // Further processing with the fetched data
    } catch (error) {
      console.error("Error fetching all data:", error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      fetch("http://localhost:3000/get/all/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            name: name,
            password: password,
          },
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          setData(response.id);
        })
        .then(() => {
          // while (bool) {
          //   if (data == []) {
          //   } else {
          //     setBool(false);
          //   }
          // }
          fetchAllData(data);
        });
    };
    fetchData();
  }, []);

  return <div>Cart</div>;
};
export default Cart;
