const ul = document.getElementById("ul");
const input = document.getElementById("input");
const add = document.getElementById("add");
const remove = document.getElementById("remove");
const reset = document.getElementById("reset");
const value = input.value;
let update = () => {
  v = input.value;
  const name = {
    name: input.value,
  };
  const options1 = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(name),
  };
  let li = document.createElement("li");
  li.classList.add("li");
  let value = input.value;

  fetch("http://localhost:5000/add", options1)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
    });

  li.innerHTML = value;
  ul.append(li);
};
let finish = () => {
  ul.innerHTML = "";
  fetch("http://localhost:5000/reset", {
    method: "POST",
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
    });
};
add.addEventListener("click", update);
reset.addEventListener("click", finish);
fetch("http://localhost:5000/get", {
  method: "POST",
})
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    let res = response;
    console.log(res);
    res.forEach((element) => {
      let li = document.createElement("li");
      li.classList.add("li");
      let value = element.name;
      li.innerHTML = value;
      ul.append(li);
      console.log(element);
    });
  })
  .catch((error) => {
    console.log("Something messed up" + error);
  });
