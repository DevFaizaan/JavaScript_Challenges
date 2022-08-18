const express = require('express');
const dotenv = require('dotenv');
const port = process.env.PORT || 27017;
const routes = require('./routes/routes');
const connectDB = require('./config/db');
dotenv.config({ path: './config/config.env' });

connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/routes', routes);
app.listen(port, () => console.log(`Server started on port ${port}`));

app.get('/api/routes', (req, res) => {
  res.status(200).json({ message: ' get stuff' });
});
