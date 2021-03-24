const { Publicacoes, Fotos, Comentarios, Usuarios } = require('../models')
const fs = require('fs')

const postController = {
  index: async (req, res) => {
    // res.locals.uname = req.session.usuario.username
    const publicacoes = await Publicacoes.findAll({
      include: [
        {
          model: Fotos,
        },
        {
          model: Usuarios,
          required: true,
        },
      ],
      order: [['created_at', 'DESC']],
    })

    const postsFormatados = publicacoes.map((publicacao) => {
      const data = new Date(publicacao.created_at)
      const dataFormatada = new Intl.DateTimeFormat('pt-BR').format(data)

      return { ...publicacao, created_at: dataFormatada }
    })

    res.render('index', { posts: postsFormatados })
  },
  create: (req, res) => {
    // res.locals.uname = req.session.usuario.username
    res.render('post')
  },
  store: async (req, res) => {
    const { file } = req
    const { usuario } = req.session
    const date = new Date()

    const publicacao = await Publicacoes.create({
      usuarios_id: usuario.id,
      created_at: date,
    })

    if (!publicacao) {
      res.send('Erro ao publicar')
    }

    const foto = await Fotos.create({
      imagem: file.filename,
      publicacoes_id: publicacao.id,
    })

    if (!foto) {
      fs.unlinkSync(file.path)
      res.send('erro ao cadastrar foto')
    }

    res.redirect('/home')
  },
}

module.exports = postController
