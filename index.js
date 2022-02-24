const server = require('./src/settings/app')
const { conexion } = require('./src/settings/db')

conexion.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('Server running on port 3001')
  })
})
