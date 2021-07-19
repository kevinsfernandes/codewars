/***
 * 
 https://www.codewars.com/kata/5679d5a3f2272011d700000d
 
 * In a grid of 6 by 6 squares you want to place a skyscraper in each square with only some clues:

The height of the skyscrapers is between 1 and 6
No two skyscrapers in a row or column may have the same number of floors
A clue is the number of skyscrapers that you can see in a row or column from the outside
Higher skyscrapers block the view of lower skyscrapers located behind them

Can you write a program that can solve each 6 by 6 puzzle?

Example:

To understand how the puzzle works, this is an example of a row with 2 clues. Seen from the left there are 6 buildings visible while seen from the right side only 1:

6	  	  	  	  	  	  	 1

There is only one way in which the skyscrapers can be placed. From left-to-right all six buildings must be visible and no building may hide behind another building:

 6	 1	 2	 3	 4	 5	 6	 1

Example of a 6 by 6 puzzle with the solution:

  	   	   	   	2	2	   	  
  	  	  	  	  	  	  	  
  	  	  	  	  	  	  	  
 3	  	  	  	  	  	  	  
  	  	  	  	  	  	  	 6
 4	  	  	  	  	  	  	 3
 4	  	  	  	  	  	  	  
  	  	  	  	  	4	  	  

  	  	  	  	 2	 2	  	  
  	 5	 6	 1	 4	 3	 2	  
  	 4	 1	 3	 2	 6	 5	  
 3	 2	 3	 6	 1	 5	 4	  
  	 6	 5	 4	 3	 2	 1	 6
 4	 1	 2	 5	 6	 4	 3	 3
 4	 3	 4	 2	 5	 1	 6	  
  	  	  	  	  	4
*/

const squareHW = 6;


function solvePuzzle(clues) {

    let gameBoard = []
    for (i = 0; i < squareHW; i++) {
        gameBoard[i] = [];
        for (j = 0; j < squareHW; j++) {
            gameBoard[i][j] = {
                sky : 0,
                nopes : []
            };
            for (k = 0; k < squareHW; k++) {
                gameBoard[i][j].nopes[k] = 0
            } // initializing non-possible values slots
        }
    }

    // THIS IS A HARDCODE! it's a set specific problem of 6x6 only though
    let rowClues = [];
    let colClues = [];
    rowClues[0] = { left : clues[23], right : clues[6] }
    rowClues[1] = { left : clues[22], right : clues[7] }
    rowClues[2] = { left : clues[21], right : clues[8] }
    rowClues[3] = { left : clues[20], right : clues[9] }
    rowClues[4] = { left : clues[19], right : clues[10] }
    rowClues[5] = { left : clues[18], right : clues[11] }
    colClues[0] = { top : clues[0], bottom : clues[17] }
    colClues[1] = { top : clues[1], bottom : clues[16] }
    colClues[2] = { top : clues[2], bottom : clues[15] }
    colClues[3] = { top : clues[3], bottom : clues[14] }
    colClues[4] = { top : clues[4], bottom : clues[13] }
    colClues[5] = { top : clues[5], bottom : clues[12] }



    // gameboard is gameBoard[][].
    console.log (clues)

    //console.log (gameBoard)
    console.log (rowClues)
    console.log (colClues)
    
// clues is 24 item array around 6x6. if no clue add '0'
// `SolvePuzzle()` returns matrix `int[][]`. 
// The first indexer is for the row, 
// the second indexer for the column

}

var clues1 = [ 3, 2, 2, 3, 2, 1,
    1, 2, 3, 3, 2, 2,
    5, 1, 2, 2, 4, 3,
    3, 2, 1, 2, 2, 4];

solvePuzzle(clues1)

/*

0   17
1   16
2   15


*/