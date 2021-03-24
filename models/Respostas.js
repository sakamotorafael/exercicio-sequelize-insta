module.exports = (sequelize, DataTypes) => {
  const respostas = sequelize.define(
    "Respostas",
    {
      legenda: {
        type: DataTypes.STRING,
      },
      usuarios_id: {
        type: DataTypes.INTEGER,
        unique: true,
      },
      comentarios_publicacoes_id: {
        type: DataTypes.INTEGER,
        unique: true,
      },
      comentarios_usuarios_id: {
        type: DataTypes.INTEGER,
        unique: true,
      }
    },
    {
      tablename: "respostas",
      timestamps: false
    }
  )

  respostas.associate = (models) => {
    respostas.belongsTo(models.Usuarios, {
      foreignKey: 'usuarios_id'
    })
   /*  respostas.belongsTo(models.Comentarios, {
      foreignKey: 'comentarios_publicacoes_id'
    }),
    respostas.belongsTo(models.Comentarios, {
      foreignKey: 'comentarios_usuarios_id'
    }) */
  }


  return respostas
}