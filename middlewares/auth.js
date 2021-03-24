module.exports = {
  isLogged: (req, res, next) => {
    if (req.session.usuario) {
      res.locals.uname = req.session.usuario.username
      return next()
    } else {
      res.redirect('/login')
    }
  },
  notLogged: (req, res, next) => {
    if (req.session.usuario == undefined) {
      return next()
    } else {
      return res.redirect('/home')
    }
  }
}