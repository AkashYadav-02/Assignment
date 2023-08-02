
const Board =require( "./Board");
const Player =require("./Player");
class Game { 
    constructor(board, player1, player2) { 
      this.board = board; 
      this.player1 = player1; 
      this.player2 = player2; 
      this.turn = 0; 
      this.isGameOver = false; 
    } 
   
    static newGame(player1Name, player2Name) { 
      let board = new Board(); 
      let player1 = new Player(player1Name, "X"); 
      let player2 = new Player(player2Name, "O"); 
   
      return new Game(board, player1, player2); 
    } 
   
    play(cellNumber) { 
        
       
      if (this.isGameOver) { 
        return "Game has ended, Please start the new game"; 
      } 
      if(!Number.isInteger(cellNumber)|| cellNumber<0||cellNumber>8){ 
        return "Invalid number" 
      } 
     
      let isCellEmpty = this.board.isEmpty(cellNumber); 
      let currentPlayer; 
      if (!isCellEmpty) { 
        return "Cell already Marked"; 
      } 
      if (this.turn % 2 === 0) { 
        currentPlayer = this.player1; 
      } else { 
        currentPlayer = this.player2; 
      } 
      currentPlayer.markCell(this.board.cells[cellNumber]); 
      this.turn++; 
      this.board.printBoard(); 
      let [winnerSymbol, gameState] = this.board.analyse();     
      if (gameState === "Win") { 
        this.isGameOver = true; 
        return winnerSymbol === "X" ? this.player1.name + " Won" : this.player2.name + " Won"; 
      } else if (gameState === "Draw") { 
        this.isGameOver = true; 
        return "Game has been Drawn"; 
      } 
      // If the game is still ongoing, return "continue" 
      return "continue"; 
    }   
  } 

  
   
  
  const g1 = Game.newGame("Akash", "Yash"); 
  
  console.log("---------Game1-------------"); 
 //even=X
  console.log(g1.play(1));//odd =0
  // console.log(g1.play(2)); 
  // console.log(g1.play(4)); 
  console.log(g1.play(7));
  console.log(g1.play(3)); 
  console.log(g1.play(8)); //X
  // console.log(g1.play(6));
  console.log(g1.play(5)); 
  console.log(g1.play(2));
  
  console.log(g1.play(6));
  console.log(g1.play(4)); 
   
  console.log(g1.play(0));
   
