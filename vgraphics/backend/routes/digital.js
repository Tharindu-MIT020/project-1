const router = require('express').Router();
let Digital = require('../models/digital.models');


router.route('/').get((req, res) => {
    Digital.find()
      .then(digital => res.json(digital))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/add').post(async(req, res) => {
    const Productcode = req.body.Productcode;
    const Description = req.body.Description;
    const Price = req.body.Price;
    const Imguri = req.body.Imguri;

  let exist = await Digital.findOne({ Productcode: Productcode })
   
  if (exist) {
  
    return res.status(200).json({ warn: "Productcode used" })
  }

    

    const newDigital = new Digital({
      Productcode,
      Description,
      Price,
      Imguri,
    });
  
    newDigital.save()
    .then(() => res.json({warns :'form added!'}))
    .catch(err => res.status(400).json('Error: ' + err));
  });


  router.route('/:id').delete((req, res) => {
  Digital.findByIdAndDelete(req.params.id)
    .then(() => res.json( {warns : 'Design deleted.'}))
    .catch(err => res.status(400).json('Error: ' + err));
});


  router.route('/:id').get((req, res) => {
  Digital.findById(req.params.id)
    .then(digital => res.json(digital))
    .catch(err => res.status(400).json('Error: ' + err));
});
  
  module.exports = router;