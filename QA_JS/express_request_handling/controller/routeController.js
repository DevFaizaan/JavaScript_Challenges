/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable spaced-comment */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable prefer-destructuring */
// eslint-disable-next-line prefer-const
//let names = ['Jamal', 'Daequellion', 'DeMarcus', 'Donatavious', 'Dimitri'];
const productSchema = require('../model/model');

const setProduct = async (req, res) => {
  if (!req.body.text) {
    res.status(400).json({ message: 'Add a text field' });
  }
  const schema = await productSchema.create(req.body);
  res.status(200).json(schema);
  // res.status(200).json(schema);
  // const name = req.body.name;
  // names.push(name);
  // res.status(201).send(`${name} added successfully`);
};

// const replace = async (req, res) => {
//   const name = req.query.name;
//   const index = req.params.index;
//   const old = names[index];
//   names[index] = name;
//   res.status(202).send(`${old} successfully replaced with ${name}`);
// };

const getProduct = async (req, res) => {
  const schema = await productSchema.find();
  res.status(200).json(schema);
};

const getAllProduct = async (req, res) => {
  const schema = await productSchema.getAll();
  res.status(200).json(schema);
};

const getProductByID = async (req, res) => {
  const schema = await productSchema.findById(req.params.id);
  res.status(200).json(schema);
  //res.send(names[req.params.id]);
};

const deleteProduct = async (req, res) => {
  const schema = await productSchema.findById(req.params.id);
  if (!schema) {
    res.status(400).json({ message: `product not founnd` });
  }

  await schema.remove();

  res.status(200).json({ id: req.params.id });
};

module.exports = {
  getProduct,
  getAllProduct,
  getProductByID,
  setProduct,
  //replace,
  deleteProduct,
};
