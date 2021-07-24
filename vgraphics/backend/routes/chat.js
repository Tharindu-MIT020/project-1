const router = require('express').Router();
let Chat = require('../models/chat.models');


router.route('/').get((req, res) => {
    Chat.find()
      .then(chat => res.json(chat))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/add').post(async(req, res) => {
    const name = req.body.name;
    const message = req.body.message;


   

    const newChat = new Chat({
      name,
      message,
    });
  
    newChat.save()
    .then(() => res.json({warns :'form added!'}))
    .catch(err => res.status(400).json('Error: ' + err));
  });


  router.route('/:id').delete((req, res) => {
  Chat.findByIdAndDelete(req.params.id)
    .then(() => res.json( {warns : 'Design deleted.'}))
    .catch(err => res.status(400).json('Error: ' + err));
});


  router.route('/:id').get((req, res) => {
  Chat.findById(req.params.id)
    .then(digital => res.json(digital))
    .catch(err => res.status(400).json('Error: ' + err));
});
  
  module.exports = router;