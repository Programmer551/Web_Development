const express = require("express");
const app = express();
const port = 3000;
const { people } = require("./data");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
// app.get("/people", (req, res) => {
//   res.status(200).json({ data: people });
// });
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});
app.post("/login", (req, res) => {
  // res.status(200).send("Form Submitted");
  const details = req.body;
  console.log(req.body);
  const { name } = details;
  // const { phone } = details;
  // const { Email } = details;
  // const { text } = details;
  // console.log(req.header);
  if (name) {
    res.status(200).json(details);
  } else {
    res.status(401).send("Enter the complete form");
  }
});
app.get("/api/people", (req, res) => {
  res.send("Hello");
});
// app.post("/api/people", (req, res) => {
//   const { name } = req.body;
//   if (!name) {
//     return res.status(400).json({ sucess: false });
//   }
//   res.status(200).send({ sucess: true, person: name });
//   // res.json(name);
// });
// app.post("api/postman/people", (req, res) => {
//   const { name } = req.body;
//   if (!name) {
//     return res.status(400).json({ sucess: false });
//   }
//   res.status(200).send({ sucess: true, person: [...people] });
//   // res.json(name);
// });
app.put("/login/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log(id, name);
  // console.log("Hello World");
  // res.send("Hello World").status(200);
  const Person = people.find((people) => people.id === Number(id));
  // res.send(Person);
  const newPeople = people.map((Person) => {
    if (Person.id === Number(id)) {
      Person.name = "Duraid";
    }
    return Person;
  });
  res.send(newPeople);
  console.log(newPeople);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
