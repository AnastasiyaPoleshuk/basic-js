import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(nn) {
  nn = nn.toString();
  nn = nn.split('');
  let total = 0;
  if (nn.length != 1) {
    for (let i = 0; i < nn.length; i++) {
      total += nn[i]<< 0;
    }
    if(lengthOfSum(total) == true){
      return total;
    }else{
      return secongSum(total);
    }
  } else if (nn.length == 1) {
    total = nn.join('');
    return total
  }
}

function lengthOfSum(total){
  if(total.length == 1){
    return true;
  }else{
    return false
  }
}

function secongSum(total){
  total = total.toString();
  total = total.split('');
  let sum = 0;
  for (let i = 0; i < total.length; i++) {
      sum += total[i]<< 0;
  }
  return sum;
}