import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  let mineArr = [];
 for(let i=0; i<matrix.length; i++){
   mineArr[i] = [];
   for(let j=0; j<matrix[i].length; j++){
	let mine = 0;
        if(matrix[i][j+1] == true && j+1<matrix[i].length){
          mine++
        };
        if(i+1<matrix.length && matrix[i+1][j] == true){
          mine++
        };
        if(j+1<matrix[i].length  && i+1<matrix.length && matrix[i+1][j+1] == true){
          mine++
        };
        if(j-1>-1 && matrix[i][j-1] == true ){
          mine++
        };
        if(i-1>-1 && matrix[i-1][j] == true ){
          mine++
        };
        if(i-1>-1 &&  j-1>-1 && matrix[i-1][j-1] == true ){
          mine++
        };
        if(j-1>-1 && i+1<matrix.length && matrix[i+1][j-1] == true  ){
          mine++
        };
        if(i-1>-1  && j+1<matrix[i].length && matrix[i-1][j+1] == true ){
          mine++
        };
	mineArr[i][j] = mine;
   }
 }
 return mineArr;
}
