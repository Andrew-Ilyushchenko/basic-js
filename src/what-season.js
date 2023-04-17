const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let month = date.getMonth();
  let season;
  if (month === 11 || month === 1 || month === 0){
    season = 'winter';
  }
  if (month === 3 || month === 4 || month === 2){
    season = 'spring';
  }
  if (month === 6 || month === 7 || month === 5){
    season = 'summer';
  }
  if (month === 9 || month === 10 || month === 8){
    season = 'autumn';
  }
  return season;
}

module.exports = {
  getSeason
};
