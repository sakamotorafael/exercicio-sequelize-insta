module.exports = (sequelize, DataTypes) => {
  const curtidas = sequelize.define(
    "Curtidas",
    {
      usuarios_id: {
        type: DataTypes.INTEGER,
        unique: true,
      },
      publicacoes_id: {
        type: DataTypes.INTEGER,
        unique: true,
      }
    },
    {
      tablename: "curtidas",
      timestamps: false
    }
  )

  curtidas.associate = (models) => {
    curtidas.belongsTo(models.Publicacoes, {
      foreignKey: 'publicacoes_id'
    }),
    curtidas.belongsTo(models.Usuarios, {
      foreignKey: 'usuarios_id'
    })
  }



  return curtidas
}