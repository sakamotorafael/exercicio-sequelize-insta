module.exports = (sequelize, DataTypes) => {
  const fotos = sequelize.define(
    "Fotos",
    {
      imagem: {
        type: DataTypes.STRING,
      },
      publicacoes_id: {
        type: DataTypes.INTEGER,
        unique: true,
      }
    },
    {
      tablename: "fotos",
      timestamps: false
    }
  )

  fotos.associate = (models) => {
    fotos.belongsTo(models.Publicacoes, {
      foreignKey: 'publicacoes_id'
    })
  }
  return fotos
}
