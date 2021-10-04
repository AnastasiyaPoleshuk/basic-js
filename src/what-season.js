import { NotImplementedError } from '../extensions/index.js';

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
export default function getSeason(date) {
  if(typeof date != "object" || date == undefined || date.length == 0){
    return 'Unable to determine the time of year!';
  }

  if( checkDate(date) == false){
    throw new Error("Invalid date!");
  }

 let seazon = date.getMonth();
 let arrWinter = [11, 0, 1];
 let arrSpring = [2, 3, 4];
 let arrSummer = [5, 6, 7];
 let arrAutumn = [8, 9, 10];

 for(let i=0; i< arrWinter.length; i++){
   if(arrWinter[i] == seazon){
     return 'winter';
   }
 };
 for(let j=0; j< arrSpring.length; j++){
  if(arrSpring[j] == seazon){
    return 'spring';
  }
};
for(let k=0; k< arrSummer.length; k++){
  if(arrSummer[k] == seazon){
    return 'summer';
  }
};
for(let l=0; l< arrAutumn.length; l++){
  if(arrAutumn[l] == seazon){
    return ('autumn'|| 'fall');
  }
};
};

function checkDate (date){
   let l = date.toString();
   let year = '';
   let day = '';
   for(let i= 11; i<=14; i++){
     year += l[i];
   }
   for(let j= 8; j<=9; j++){
    day += l[j];
  }
  if(date.getDate() != +day || date.getFullYear()!= +year){
    return false;
  }else{
    return true;
  }
}
