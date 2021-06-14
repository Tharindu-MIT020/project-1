const router = require('express').Router();
let Vcard = require('../models/vcard.modle');


router.route('/').get((req, res) => {
    Vcard.find()
      .then(vcard => res.json(vcard))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/add').post(async(req, res) => {
    const Productcode = req.body.Productcode;
    const Description = req.body.Description;
    const Price = req.body.Price;
    const Imguri = req.body.Imguri;
    

    const newVcard = new Vcard({
      Productcode,
      Description,
      Price,
      Imguri,
    });
  
    newVcard.save()
    .then(() => res.json('form added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });


  router.route('/:id').get((req, res) => {
  Vcard.findById(req.params.id)
    .then(vcard => res.json(vcard))
    .catch(err => res.status(400).json('Error: ' + err));
});
  
  module.exports = router;