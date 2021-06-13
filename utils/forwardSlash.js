const isMac = require('./isMac')

const splitValue = isMac() ? '/' : '\\'

module.exports = splitValue
