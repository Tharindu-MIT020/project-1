const router = require('express').Router();
let Cdesign = require('../models/cdesing.models');




router.route('/').get((req, res) => {
    Cdesign.find()
      .then(cdesign => res.json(cdesign))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/add').post(async(req, res) => {
    const name = req.body.name;
    const designtype = req.body.designtype;
    const imagurl = req.body.imagurl;
    const description = req.body.description;
    

    const newCdesign = new Cdesign({
      name,
      designtype,
      imagurl,
      description,
    });
  
    newCdesign.save()
    .then(() => res.json({warns :'form added!'}))
    .catch(err => res.status(400).json('Error: ' + err));
  });


  router.route('/:id').delete((req, res) => {
  Cdesign.findByIdAndDelete(req.params.id)
    .then(() => res.json( {warns : 'Design deleted.'}))
    .catch(err => res.status(400).json('Error: ' + err));
});


  router.route('/:id').get((req, res) => {
  Cdesign.findById(req.params.id)
    .then(digital => res.json(digital))
    .catch(err => res.status(400).json('Error: ' + err));
});
  
  module.exports = router;