const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arrayName) {
  let result = Object.keys(arrayName).map(val => {
   let firstA = val.trim()
   for (let i = 0; i < val.length; i++){
    if (typeof val[i] !== 0||1||2||3||4||5||6||7||8||9||' ') {
     return val[i].toUpperCase()
     break;
    }
   }
   
  }).sort().join('')
  return result
 }

module.exports = {
  createDreamTeam
};
