import express from 'express';
import data from './data.js';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import seedRouter from './routes/seedRoutes.js';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/seed', seedRouter);

app.use('/api/v1/product/token/:token', (req, res) => {
  const product = data.products.find((x) => x.token === req.params.token);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product was not found' });
  }
});

//Endpoints
app.get('/api/v1/products', (req, res) => {
  res.send(data.products);
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to db');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(`Connection failed, ${err.messsage}`);
  });
