const router = require('express').Router();
let Proof = require('../models/proof.models');


router.route('/').get((req, res) => {
    Proof.find()
      .then(proof => res.json(proof))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/add').post(async(req, res) => {
    const proofcod = req.body.proofcod;
    const imagurl = req.body.imagurl;


   

    const newProof = new Proof({
      proofcod,
      imagurl,
    });
  
    newProof.save()
    .then(() => res.json({warns :'form added!'}))
    .catch(err => res.status(400).json('Error: ' + err));
  });


  router.route('/:id').delete((req, res) => {
  Proof.findByIdAndDelete(req.params.id)
    .then(() => res.json( {warns : 'Design deleted.'}))
    .catch(err => res.status(400).json('Error: ' + err));
});


  router.route('/:id').get((req, res) => {
  Proof.findById(req.params.id)
    .then(proof => res.json(proof))
    .catch(err => res.status(400).json('Error: ' + err));
});
  
  module.exports = router;