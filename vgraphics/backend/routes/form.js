const router = require('express').Router();
let Form = require('../models/form.models');

router.route('/').get((req, res) => {
    Form.find()
      .then(form => res.json(form))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/add').post((req, res) => {
    const name = req.body.name;
    const address = req.body.address;
    const tel = req.body.tel;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
  
    const newForm = new Form({
      name,
      address,
      tel,
      username,
      email,
      password,
    });
  
    newForm.save()
    .then(() => res.json('form added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });
  
  module.exports = router;