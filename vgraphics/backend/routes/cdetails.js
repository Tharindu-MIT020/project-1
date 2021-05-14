const router = require('express').Router();
let Cdetails = require('../models/cdetails.models');

router.route('/').get((req, res) => {
  Cdetails.find()
    .then(Cdetails => res.json(Cdetails))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const cname = req.body.cname;
  const address = req.body.address;
  const telephone = req.body.telephone;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const newCdetails = new Cdetails({
    cname,
    address,
    telephone,
    username,
    email,
    password,
  });

  newCdetails.save()
  .then(() => res.json('Cdetails added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;