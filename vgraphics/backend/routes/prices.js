const router = require('express').Router();
let Prices = require('../models/prices.models');


router.route('/').get((req, res) => {
    Prices.find()
      .then(prices => res.json(prices))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/add').post(async(req, res) => {
    const material = req.body.material;
    const size = req.body.size;
    const quality = req.body.quality;
    const price = req.body.price;
    



  
    const newPrices = new Prices({
      material,
      size,
      quality,
      price,
    });
  
    newPrices.save()
    .then(() => res.json({warn :'Price added!'}))
    .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').delete((req, res) => {
    Prices.findByIdAndDelete(req.params.id)
    .then(() => res.json( {warns : 'Price deleted.'}))
    .catch(err => res.status(400).json('Error: ' + err));
});


  router.route('/:id').get((req, res) => {
  Prices.findById(req.params.id)
    .then(offset => res.json(offset))
    .catch(err => res.status(400).json('Error: ' + err));
});
  
  module.exports = router;