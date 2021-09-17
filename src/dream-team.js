import { NotImplementedError } from '../extensions/index.js';

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
 export default function createDreamTeam(members) {
  let str = '';
  if( members == null){
    return false;
  }
  for(let i=0; i< members.length; i++){
    if(typeof members[i] == "string"){
      if(members[i] != null){
        members[i] =  members[i].trim();
      }
        str += members[i][0].toUpperCase();
    } 
  }
  if(str == null || str.length == 0){
    return false;
  } else{
    return alphabetize(str);
  }

};

function alphabetize(str) {
  return str.split('').sort().join('');
}  
