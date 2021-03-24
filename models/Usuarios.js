module.exports = (sequelize, DataTypes) => {
  const usuarios = sequelize.define(
    'Usuarios',
    {
      nome: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      senha: {
        type: DataTypes.STRING,
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
      },
      imagem: {
        type: DataTypes.STRING,
      },
      data_nascimento: {
        type: DataTypes.DATE,
      },
    },
    {
      tablename: 'usuarios',
      timestamps: false,
    }
  )

  usuarios.associate = (models) => {
    usuarios.hasMany(models.Comentarios, {
      foreignKey: 'usuarios_id',
    }),
      usuarios.hasMany(models.Publicacoes, {
        foreignKey: 'usuarios_id',
      })
  }

  return usuarios
}
