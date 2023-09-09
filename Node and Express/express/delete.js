const express = require("express");

const app = express();
const port = 3000;
const { people } = require("./data");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.delete("/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);

  const Person = people.find((people) => people.id === Number(id));

  const newPeople = people.filter((Person) => {
    Person.id !== id;
  });
  res.send(newPeople).status(200);
  console.log(newPeople);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
