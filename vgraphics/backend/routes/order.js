const router = require('express').Router();
let Oder = require('../models/order.models');


router.route('/').get((req, res) => {
    Oder.find()
      .then(order => res.json(order))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/add').post(async(req, res) => {
    const productname = req.body.productname;
    const qty = req.body.qty;
    const discription = req.body.discription;
    const price = req.body.price;


   

    const newChat = new Oder({
      productname,
      qty,
      discription,
      price,
    });
  
    newOder.save()
    .then(() => res.json({warns :'form added!'}))
    .catch(err => res.status(400).json('Error: ' + err));
  });


  router.route('/:id').delete((req, res) => {
  Oder.findByIdAndDelete(req.params.id)
    .then(() => res.json( {warns : 'Design deleted.'}))
    .catch(err => res.status(400).json('Error: ' + err));
});


  router.route('/:id').get((req, res) => {
  Oder.findById(req.params.id)
    .then(digital => res.json(digital))
    .catch(err => res.status(400).json('Error: ' + err));
});
  
  module.exports = router;