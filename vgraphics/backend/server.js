const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const registerRouter =require('./routes/exercise');
const usersRouter = require('./routes/users');
const formRouter = require('./routes/form');
const priceRouter = require('./routes/prices');
const DigitalRouter = require('./routes/digital');

app.use('/exercise', registerRouter);
app.use('/users', usersRouter);
app.use('/form', formRouter);
app.use('/price', priceRouter);
app.use('/digital', DigitalRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
