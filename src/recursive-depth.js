import { NotImplementedError } from '../extensions/index.js';

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
export default class DepthCalculator {
  calculateDepth(a) {
    let countOfArr = 0;
    const stack = [...a];
    if(flatArr(stack) == true){
      return 1;
    }
    const res = [];
    while (stack.length) {
      const next = stack.pop();
      if (Array.isArray(next)) {
        stack.push(...next);
        countOfArr++;
      } else {
        res.push(next);
      }
    }
    result = res.length + countOfArr;
    countOfArr +=1
    return result;
   }
};

function flatArr(stack){
  for(let i=0; i<stack.length; i++){
    if (Array.isArray(stack[i])){
      return false
    }
  }
  return true
}