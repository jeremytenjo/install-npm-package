const forwardSlash = require('./forwardSlash')

/**
 * Supports Mac and Windows
 * @example
 * splitPath('/project/heoo')
 *
 * returns ['project', 'heoo']
 */
module.exports = function splitPath(path) {
  return path.toString().split(forwardSlash)
}
