import java.util.Random;
import java.util.Scanner;

public class BookCricketGame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();

        int bookSize = 201; 

        String[] bookPages = new String[bookSize];
        for (int i = 0; i < bookSize; i++) {
            bookPages[i] = String.valueOf(i);
        }

        System.out.println("Welcome to  Book Cricket Game!");

        int tossPlayer1 = random.nextInt(bookSize);
        int tossPlayer2 = random.nextInt(bookSize);

        System.out.println("Toss Result:");
        System.out.println("Player 1: " + tossPlayer1);
        System.out.println("Player 2: " + tossPlayer2);

        int currentPlayer = (tossPlayer1 > tossPlayer2) ? 0 : 1;
        System.out.println("Player " + (currentPlayer + 1) + " won the toss and will bat first.\n");

        boolean gameEnd = false;

        int[] totalRuns = new int[2]; 
        int[] ballsPlayed = new int[2]; 

        while (!gameEnd) {
            System.out.print("Player " + (currentPlayer + 1) + ", press Enter to bat...");
            scanner.nextLine();

            int randomPage = random.nextInt(bookSize);
            System.out.println("You scored: " + bookPages[randomPage]);

            if (bookPages[randomPage].endsWith("0")) {
                System.out.println("Player " + (currentPlayer + 1) + " is out!");
                gameEnd= true;
            } else if (bookPages[randomPage].equals("8")) {
                System.out.println("No-ball! Player " + (currentPlayer + 1) );
            } else {
                int runsScored = Integer.parseInt(bookPages[randomPage]);
                totalRuns[currentPlayer] += runsScored;
                System.out.println("Total runs for Player " + (currentPlayer + 1) + ": " + totalRuns[currentPlayer]);
                ballsPlayed[currentPlayer]++;
            }

            currentPlayer = (currentPlayer + 1) % 2;
        }

        System.out.println("--- Game Over ---");
        System.out.println("Final Scores:");
        System.out.println("Player 1: " + totalRuns[0] + " runs");
        System.out.println("Player 2: " + totalRuns[1] + " runs");

      
        if (totalRuns[0] > totalRuns[1]) {
            System.out.println("Player 1 is the winner!");
        } else if (totalRuns[1] > totalRuns[0]) {
            System.out.println("Player 2 is the winner!");
        } else {
            System.out.println("It's a tie!");
        }

        System.out.println("\nThank you for playing!");
    }





}




///output 
/*elcome to  Book Cricket Game!
ss Result:
Player 1: 134
Player 2: 153
Player 2 won the toss and will bat first.

Player 2, press Enter to bat...
You scored: 69
Total runs for Player 2: 69
Player 1, press Enter to bat...
You scored: 40
Player 1 is out!
--- Game Over ---
Final Scores:
Player 1: 0 runs
Player 2: 69 runs
Player 2 is the winner!

Thank you for playing!*/
