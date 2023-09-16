// const url =
//   "https://weatherapi-com.p.rapidapi.com/forecast.json?q=London&days=3";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "b622ff5086msh6b4f8c0757192c0p11800bjsn30e8ed1641df",
//     "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
//   },
// };
// fetch(url)
//   .then((response) => {
//     return response.json();
//   })
//   .then((response) => {
//     console.log(response);
//   });
let a = async () => {
  const url =
    "https://weatherapi-com.p.rapidapi.com/forecast.json?q=Karachi&days=3";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b622ff5086msh6b4f8c0757192c0p11800bjsn30e8ed1641df",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    console.log(result.forecast.forecastday[0]);
  } catch (error) {
    console.error(error);
  }
};
a();
