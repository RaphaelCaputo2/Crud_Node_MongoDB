const express = require('express');

const User = require('../models/index');

const router = express.Router();

router.post('/register', async (req, res) => {
  
  try {
    const { email } = req.body;
    if (await User.findOne({ email })) res.status(400).send({ error: 'Usuario ja existe' });


    const user = await User.create(req.body);
    user.password = undefined;
    return res.send({ user });
  } catch (err) {
    
    return res.status(400).send({ error: 'O registro falhou'});
  }
});

module.exports = app => app.use('/auth', router);