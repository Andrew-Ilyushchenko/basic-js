const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if(!!(arr||[]).length){
      const a = arr.map(x =>  (x||[]).length).sort((a,b)=> a-b)
 const max = Math.max(...a)
 const min = Math.min(...a)
 if(min===0|| min === undefined){
 return 0} else{
 for(let i = min; i<=max; i++){
     if(!a.includes(i)){
     return i}}}
 } else {
return 0
}
  }
}

module.exports = {
  DepthCalculator
};
