const express = require("express");

const app = express();
const port = 3000;
const { people } = require("./data");
app.use(express.static("public"));
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.delete("/:id", (req, res) => {
  //   let { id } = req.params;

  //   id = Number.parseInt(id);
  //   console.log(id);
  const Person = people.find((Person) => Person.id === Number(req.params.id));

  const newPeople = people.filter(
    (Person) => Person.id !== Number(req.params.id)
  );
  return res.status(200).json({ sucess: true, data: newPeople });
  //   console.log(newPeople);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
