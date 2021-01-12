const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const mailer = require('../../modules/mailer');
const authConfig = require('../../config/auth.json');
const User = require('../models/index');

const router = express.Router();
const generateToken = (params = {}) => {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
};
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
    return res.status(400).send({ error: 'O registro falhou' });
  }
});

router.post('/authenticate', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select('+password');

  if (!user) return res.status(400).send({ error: 'Usuário não encontrado' });

  if (!(await bcrypt.compare(password, user.password)))
    return res.status(400).send({ error: 'Senha invalida' });

  user.password = undefined;

  res.send({
    user,
    token: generateToken({ id: user.id }),
  });
});

router.post('/forgot_password', async (req, res) => {
  const { email } = req.body;
  try {
    
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send({ erro: 'Usuário não encontrado' });
    
    const token = crypto.randomBytes(20).toString('hex');

    const now = new Date();
    now.setHours(now.getHours() + 1);

    await User.findByIdAndUpdate(user.id, {
      '$set': {
        passwordResetToken: token,
        passwordResetExpires: now,
      }
    });

    mailer.sendMail({
      to: email,
      from: 'faelelf2@gmail.com',
      template: '/auth/forgot_password',
      context: { token },
    }, (err) => {
      if (err)
      return res.status(400).send({ error: 'Não foi possível enviar o email de recuperação para o email'})
      

      return res.send();
    })

  } catch (err) {
    res.status(400).send({ erro: 'Erro ao recuperar senha, tente novamente' });
  }
});

router.post('/reset_password', async (req, res) => {
const { email, token, password } = req.body;

try {
const user = await User.findOne({ email })
.select('+passwordResetToken passwordResetExpires');

if (!user) return res.status(400).send({ erro: 'Usuário não encontrado' });

if (token !== user.passwordResetToken)
 return res.status(400).send({ error: 'Token inválido' })

 const now = new Date();

 if (now > user.passwordResetExpires)
 return res.status(400).send({ erro: 'Token expirado, gere um novo token!' });

 user.password = password;


 await user.save();
 res.send();
 
} catch (err) {
  res.status(400).send({ error: 'Não é possivel resetar a senha!' });
}

})
module.exports = app => app.use('/auth', router);
