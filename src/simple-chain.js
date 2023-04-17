const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  
  getLength() {
    return chainMaker.length;
  },
  addLink(value) {
    chainMaker.push(value);
      return this;
  },
  removeLink(position) {
    if (
      typeof position !== 'number' ||
      position <= 0 ||
      position > chainMaker.length
    ) {
      chainMaker = '';
    }
    chainMaker.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    chainMaker.reverse();
      return this;
  },
  finishChain() {
    const result = chainMaker.join('~~');
    chainMaker = '';
    return result;
  }
};

module.exports = {
  chainMaker
};
