module.exports = (sequelize, DataTypes) => {
  const comentarios = sequelize.define(
    "Comentarios",
    {
      texto: {
        type: DataTypes.STRING,
      },
      usuarios_id: {
        type: DataTypes.INTEGER,
        unique: true,
      },
      created_at: {
        type: DataTypes.DATE,
      },
      publicacoes_id: {
        type: DataTypes.INTEGER,
        unique: true,
      }
    },
    {
      tablename: "comentarios",
      timestamps: false
    }
  )

  comentarios.associate = (models) => {
    comentarios.belongsTo(models.Publicacoes, {
      foreignKey: 'publicacoes_id'
    }),
    comentarios.belongsTo(models.Usuarios, {
      foreignKey: 'usuarios_id'
    })
  }
  
  return comentarios
}
