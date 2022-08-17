/* eslint-disable linebreak-style */
/* eslint-disable prefer-destructuring */
// eslint-disable-next-line prefer-const
let names = ['Jamal', 'Daequellion', 'DeMarcus', 'Donatavious', 'Dimitri'];

const set = (req, res) => {
  const name = req.body.name;
  names.push(name);
  res.status(201).send(`${name} added successfully`);
};

const replace = (req, res) => {
  const name = req.query.name;
  const index = req.params.index;
  const old = names[index];
  names[index] = name;
  res.status(202).send(`${old} successfully replaced with ${name}`);
};

const get = (req, res) => {
  res.send('Hello, my name is JH!');
};

const getAll = (req, res) => {
  res.send(names);
};

const getByID = (req, res) => {
  res.send(names[req.params.id]);
};

const deletes = (req, res) => {
  res.send(names.splice(req.params.id, 1));
};

module.exports = {
  get,
  getAll,
  getByID,
  set,
  replace,
  deletes,
};
