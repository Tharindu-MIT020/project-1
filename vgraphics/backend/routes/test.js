const router = require('express').Router();
let Test = require('../models/test.models');


router.route('/').get((req, res) => {
    Test.find()
      .then(test => res.json(test))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/add').post(async(req, res) => {
    const product = req.body.product;
    const name = req.body.name;
    const discription = req.body.discription;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;
    const fil = req.body.fil;
    const dis = req.body.dis;
    const qty = req.body.qty;



    

    const newTest = new Test({
      product,
      name,
      discription,
      price,
      imageUrl,
      fil,
      dis,
      qty,
    });
  
    newTest.save()
    .then(() => res.json({warns :'form added!'}))
    .catch(err => res.status(400).json('Error: ' + err));
  });


  router.route('/:id').delete((req, res) => {
  Test.findByIdAndDelete(req.params.id)
    .then(() => res.json( {warns : 'Design deleted.'}))
    .catch(err => res.status(400).json('Error: ' + err));
});


  router.route('/:id').get((req, res) => {
  Test.findById(req.params.id)
    .then(digital => res.json(digital))
    .catch(err => res.status(400).json('Error: ' + err));
});
  
  module.exports = router;