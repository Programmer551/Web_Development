let hamburger = document.getElementById("hamburger");
let hamburger1 = document.getElementById("hamburger1");
let hamburger2 = document.getElementById("hamburger2");
let hamburger3 = document.getElementById("hamburger3");
let navbar = document.getElementById("navbar");
hamburger.onclick = function () {
  if (navbar.classList.contains("animation")) {
    navbar.classList.remove("animation");
    navbar.classList.add("animation2");
    hamburger1.classList.remove("cross1");
    hamburger2.classList.remove("cross2");
    hamburger3.classList.remove("none");
  } else {
    navbar.classList.remove("animation2");
    navbar.classList.add("animation");
    hamburger1.classList.add("cross1");
    hamburger2.classList.add("cross2");
    hamburger3.classList.add("none");
  }
};
const data_to_send = {
  name: "Duraid",
};
const data = fetch("http://localhost:3000/2", {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
  // body: JSON.stringify(data_to_send),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
    // console.log(response.ok);
    // console.log(response.status)
  })
  .then((response2) => {
    console.log(response2);
  })
  .catch((error) => {
    // Handle any errors that occurred during the fetch
    console.error("There was a problem with the fetch operation:", error);
  });
