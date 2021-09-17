import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 export default function transform(arr) {
  if (Array.isArray(arr) == false){
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  
 let newArr = arr;
  if ( newArr == null || newArr == undefined){
   throw new Error("'arr' parameter must be an instance of the Array!");
  };
  if(newArr.length == 0){
    return newArr;
  }
 
 if(newArr[0] == '--discard-prev'){
    newArr.splice(0, 1);
 }; 
 if(newArr[0] == '--double-prev'){
    newArr.splice(0, 1);
 };
 if(newArr[newArr.length-1] == '--discard-next'){
    newArr.splice(newArr.length-1, 1);
 }; 
 if(newArr[newArr.length-1] == '--double-next'){
   newArr.splice(newArr.length-1, 1);
 };
 for(let i=0; i< newArr.length; i++){
   if(newArr[i] == '--discard-next'){
     newArr.splice(i+1, 1);
   } else if(newArr[i] == '--discard-prev'){
     newArr.splice(i-1, 1);
   } else if(newArr[i] == '--double-next'){
     let k = newArr[i+1];
       if(isCommand(k) == false){ 
         newArr.splice(i, 0, k);
       };
   } else if(newArr[i] == '--double-prev'){
     let k = newArr[i-1];
     if(isCommand(k) == false){ 
       newArr.splice(i, 0, k);
     };
   };
 };
  
  newArr = DeleteCommand(newArr);
  // for(let l=0; l<newArr.length; l++){
  //   if(typeof newArr[l] != "string"){
  //    result.push(newArr[l]);
  //   };
  // };
 return newArr;
 };
 
 
 function DeleteCommand(newArr){
  let result = []
   for(let l=0; l < newArr.length; l++){
     let t =newArr[l];
     if(isCommandd(t)){
     continue
     }else{
      result.push(newArr[l]);
     }
   }
   return result;
 };
 
 function isCommand (k){
   switch (k){
     case '--discard-next':
       return true;
     case '--discard-prev':
       return true;
     case '--double-next':
       return true;
     case '--double-prev':
       return true;
     default:
       return false;
   }
}

function isCommandd (t){
  switch (t){
    case '--discard-next':
      return true;
    case '--discard-prev':
      return true;
    case '--double-next':
      return true;
    case '--double-prev':
      return true;
    default:
      return false;
  }
}
