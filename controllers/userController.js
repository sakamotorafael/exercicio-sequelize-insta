const { Usuarios } = require('../models')
const bcrypt = require('bcrypt')

const userController = {
  create: (_req, res) => res.render('auth/register'),
  
  store: async (req, res) => {
    let { email, name, username, password } = req.body
    let cPass = bcrypt.hashSync(password, 10)

    const user = await Usuarios.create({
      nome: name,
      email: email,
      senha: cPass,
      username: username,
    })
    
    if (user) {
      req.session.usuario = {
        id: user.id,
        nome: user.username,
        username: user.username,
        email: user.email
      }
      res.redirect('/home')
    } else {
      res.send('Erro ao cadastrar. Tente novamente.')
    }
  },
}

module.exports = userController
