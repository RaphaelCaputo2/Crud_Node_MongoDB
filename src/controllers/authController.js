const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');
const User = require('../models/index');

const router = express.Router();
const generateToken = (params = {}) => {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  })
}
router.post('/register', async (req, res) => {
  
  try {
    const { email } = req.body;
    if (await User.findOne({ email })) res.status(400).send({ error: 'Usuario ja existe' });


    const user = await User.create(req.body);
    user.password = undefined;
    return res.send({ 
      user,
      token: generateToken({ id: user.id }),
     });
  } catch (err) {
    
    return res.status(400).send({ error: 'O registro falhou'});
  }
});

router.post('/authenticate', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select('+password');

  if(!user) 
  return res.status(400).send({ error: 'Usuário não encontrado' });
  
  if(!await bcrypt.compare(password, user.password)) 
  return res.status(400).send({ error: 'Senha invalida'})


  user.password = undefined;
 
  res.send({
     user, 
    token: generateToken({ id: user.id }),
   });

})

module.exports = app => app.use('/auth', router);