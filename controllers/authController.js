const { Usuarios } = require('../models')
const bcrypt = require('bcrypt')

const authController = {
  create: (_req, res) => {
    return res.render('auth/login')
  },
  login: async (req, res) => {
    let { email, password } = req.body
    const user = await Usuarios.findOne({
      where: { email: email },
    })

    if (user) {
      if (bcrypt.compareSync(password, user.senha)) {
        req.session.usuario = {
          id: user.id,
          nome: user.username,
          username: user.username,
          email: user.email
        }
        res.redirect('/home')
      } else {
        res.send('Usuário ou senha inválidos.')
      }
    } else {
      res.send('Usuário ou senha inválidos.')
    }
  },
}

module.exports = authController
