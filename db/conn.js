const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('toughts2', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

try {
    sequelize.authenticate()
    console.log('Conectamos com sucesso!')
} catch{ 
    console.log(`Não foi possivel conectar: ${err}`)
}

module.exports = sequelize