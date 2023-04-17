const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let result = email.split('@')[1]
  if (result[0] === '.') {
   result = email.split('@')[2]
  } 
  return result
 }

module.exports = {
  getEmailDomain
};
