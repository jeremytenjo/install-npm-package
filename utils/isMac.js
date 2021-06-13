const os = require('os')

module.exports = () => os.type() === 'Darwin'
