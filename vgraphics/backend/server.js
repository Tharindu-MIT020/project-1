const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


const formRouter = require('./routes/form');
const priceRouter = require('./routes/prices');
const DigitalRouter = require('./routes/digital');
const VcardRouter = require('./routes/vcard');
const OffsetRouter = require('./routes/offset');
const Chat = require('./routes/chat')
const QChat = require('./routes/qchat')
const Oder = require('./routes/order')
const Cdesign = require('./routes/cdesign')
const Makepayment = require('./routes/makepayment')
const Proof = require('./routes/proof')



app.use('/form', formRouter);
app.use('/cdesign', Cdesign);
app.use('/order', Oder);
app.use('/price', priceRouter);
app.use('/digital', DigitalRouter);
app.use('/vcard', VcardRouter);
app.use('/offset', OffsetRouter);
app.use('/chat', Chat);
app.use('/qchat', QChat);
app.use('/makepayment', Makepayment);
app.use('/proof', Proof);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});