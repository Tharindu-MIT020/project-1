const router = require('express').Router();
let Makepayment = require('../models/makepayment.models');




router.route('/').get((req, res) => {
    Makepayment.find()
      .then(makepayment => res.json(makepayment))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/add').post(async(req, res) => {
    const name = req.body.name;
    const price = req.body.price;
    const method = req.body.method;
    const images = req.body.images;
    

    const newMakepayment = new Makepayment({
      name,
      price,
      method,
      images,
    });
  
    newMakepayment.save()
    .then(() => res.json({warns :'Payment Successfull'}))
    .catch(err => res.status(400).json('Error: ' + err));
  });


  router.route('/:id').delete((req, res) => {
  Makepayment.findByIdAndDelete(req.params.id)
    .then(() => res.json( {warns : 'Design deleted.'}))
    .catch(err => res.status(400).json('Error: ' + err));
});


  router.route('/:id').get((req, res) => {
  Makepayment.findById(req.params.id)
    .then(makepayment => res.json(makepayment))
    .catch(err => res.status(400).json('Error: ' + err));
});
  
  module.exports = router;