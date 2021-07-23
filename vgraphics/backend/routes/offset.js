const router = require('express').Router();
let Offset = require('../models/offset.models');


router.route('/').get((req, res) => {
    Offset.find()
      .then(offset => res.json(offset))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/add').post(async(req, res) => {
    const Productcode = req.body.Productcode;
    const Description = req.body.Description;
    const Price = req.body.Price;
    const Imguri = req.body.Imguri;
    

    const newOffset = new Offset({
      Productcode,
      Description,
      Price,
      Imguri,
    });
  
    newOffset.save()
    .then(() => res.json({warn :'form added!'}))
    .catch(err => res.status(400).json('Error: ' + err));
  });

    router.route('/:id').delete((req, res) => {
    Offset.findByIdAndDelete(req.params.id)
    .then(() => res.json( {warns : 'Design deleted.'}))
    .catch(err => res.status(400).json('Error: ' + err));
});


  router.route('/:id').get((req, res) => {
  Offset.findById(req.params.id)
    .then(offset => res.json(offset))
    .catch(err => res.status(400).json('Error: ' + err));
});
  
  module.exports = router;