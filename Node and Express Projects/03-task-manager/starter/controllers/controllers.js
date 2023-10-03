const home = (req, res) => {
  res.send("Home Page is here");
};
const create_task = (req, res) => {
  res.json(req.body);
};
const get_task = (req, res) => {
  res.json({ id: req.params.id });
};
const update_task = (req, res) => {
  res.send("update Task");
};
const delete_task = (req, res) => {
  res.send("delete Task");
};
module.exports = { home, create_task, get_task, update_task, delete_task };
