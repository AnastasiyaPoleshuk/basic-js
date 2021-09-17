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
  calculateDepth( arr ) {
    if(arr ==null || arr.length ==0){
      return 1;
    }
      for(let i=0; i<arr.length; i++){
         if(arr.every(Type) == true){
           return 1;
        }else{
          if (Array.isArray(arr[i])) {
             return 1 + calculateDepth(arr[i]);
          }       
        }
      }
  }
}

function Type (arr){
  return typeof arr =="number";
}
