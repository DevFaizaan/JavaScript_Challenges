const express = require('express');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  const logEntry = `host: ${req.host}
    ip: ${req.ip}
    method: ${req.method}
    path: ${req.path}
    time: ${new Date()}`;
  console.log(logEntry);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

let names = ['Jamal', 'Daquelliois', 'DeMarcus', 'Quandellion', 'Demetri'];

app.get('/getAll', (req, res) => res.send(names));

app.get('/get/:id', (req, res) => res.send(names[req.params.id]));

app.get('/delete/:id', (req, res) => {
  res.send(names.splice(req.params.id, 1));
});

app.post('/create', (req, res) => {
  const name = req.body.name;
  names.push(name);
  res.status(201).send(`${name} added successfully`);
});

app.post('/replace/:index', (req, res) => {
  const name = req.query.name;
  const index = req.params.index;
  const old = names[index];
  names[index] = name;
  res.status(202).send(`${old} successfully replaced with ${name}`);
});
