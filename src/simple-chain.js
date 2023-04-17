const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  
  getLength() {
    let chain;
    return chain.length;
  },
  addLink(value) {
    let chain;
    chain + (value);
      return this;
  },
  removeLink(position) {
    let chain;
    if (
      typeof position !== 'number' ||
      position <= 0 ||
      position > chain.length
    ) {
      chain = '';
    }
    chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    let chain;
    chain.reverse();
      return this;
  },
  finishChain() {
    let chain;
    const result = chain.join('~~');
    chain = '';
    return result;
  }
};

module.exports = {
  chainMaker
};
