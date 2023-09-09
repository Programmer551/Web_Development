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
app.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log(id, name);

  const Person = people.find((people) => people.id === Number(id));

  const newPeople = people.map((Person) => {
    if (Person.id === Number(id)) {
      Person.name = name;
    }
    return Person;
  });
  res.send(newPeople);
  console.log(newPeople);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
