const Cell =require("./Cell.js"); 
 
class Board { 
  constructor() { 
    this.cells = [ 
      new Cell(), new Cell(), new Cell(), 
      new Cell(), new Cell(), new Cell(), 
      new Cell(), new Cell(), new Cell() 
    ]; 
  } 
  isEmpty(cellNumber) { 
    return this.cells[cellNumber].isEmpty(); 
  } 
 
  printBoard() { 
   
    for (let i = 0; i < 3; i++) { 
      console.log(` ${this.cells.slice(i * 3, i * 3 + 3).map(cell => cell.mark).join(" | ")} `); 
      if (i !== 2) { 
        console.log("-------------"); 
      } 
    } 
    
  } 
 
  analyse() { 
    
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (
        this.cells[a].mark !== "Z" &&
        this.cells[a].mark === this.cells[b].mark &&
        this.cells[a].mark === this.cells[c].mark
      ) {
        return [this.cells[a].mark, "Win"]; 
      }
    }

    if (this.cells.every(cell => cell.mark !== "Z")) {
      return ["", "Draw"];
    }

    return ["", ""]; 
  }
}

module.exports = Board;