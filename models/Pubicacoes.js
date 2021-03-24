module.exports = (sequelize, DataTypes) => {
  const publicacoes = sequelize.define(
    'Publicacoes',
    {
      legenda: {
        type: DataTypes.STRING,
      },
      usuarios_id: {
        type: DataTypes.INTEGER,
        unique: true,
      },
      created_at: {
        type: DataTypes.DATE,
      },
    },
    {
      tablename: 'publicacoes',
      timestamps: false,
    }
  )

  publicacoes.associate = (models) => {
    publicacoes.hasMany(models.Fotos, {
      foreignKey: 'publicacoes_id',
    }),
      publicacoes.hasMany(models.Comentarios, {
        foreignKey: 'publicacoes_id',
      }),
      publicacoes.belongsTo(models.Usuarios, {
        foreignKey: 'usuarios_id',
      })
  }

  return publicacoes
}
