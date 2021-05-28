const router = require('express').Router();
let Form = require('../models/form.models');

router.route('/').get((req, res) => {
    Form.find()
      .then(form => res.json(form))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/add').post(async(req, res) => {
    const name = req.body.name;
    const address = req.body.address;
    const tel = req.body.tel;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    let exist = await Form.findOne({ username: username })
   


  if (exist) {
  
    return res.status(200).json({ warn: "Username alredy used !" })
  }
  else {
     exist = await Form.findOne({ email: email })
    if(exist){
      return res.status(200).json({ warn: "email  alredy used !" })
    }
  }

  
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