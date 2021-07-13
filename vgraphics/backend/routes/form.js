const router = require('express').Router();
let Form = require('../models/form.models');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config();


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

    const salt = await bcrypt.genSalt(10)
    newForm.password = await bcrypt.hash(newForm.password, salt)


  
    newForm.save()
    .then(() => res.json('form added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

  //User Login
    router.route('/login').post(async (req,res) => {

    //Check Current Users
    let user = await Form.findOne({ username: req.body.username});
    if(!user) return res.status(200).json({ warn: "Invalid Email" })

    //check password
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if(!validPassword) res.status(400).json({ warn: 'Invalid Password'})

    //Set Token
    const token = jwt.sign({_id : user._id, username: user.username },  process.env.jwtKey)

    //Response
    res.status(200)
    .header('x-auth-token', token)
    .json({
        jwt: token,
        msg: 'Logged In Successfully'
    })

});

  
  module.exports = router;