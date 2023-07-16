package com.aurionpro.test;

import java.util.Scanner;

import com.aurionpro.model.MatrixMultiply;

public class MatrixMutiplyTest {

	
		public static void main(String[] args) {
	        Scanner scanner = new Scanner(System.in);
	        MatrixMultiply matrix=new MatrixMultiply();

	        System.out.print("Enter the number of rows for matrix 1: ");
	        int rows1 = scanner.nextInt();
	        System.out.print("Enter the number of columns for matrix 1: ");
	        int cols1 = scanner.nextInt();

	        int[][] matrix1 = new int[rows1][cols1];
	        System.out.println("Enter the elements of matrix 1:");

	        for (int i = 0; i < rows1; i++) {
	            for (int j = 0; j < cols1; j++) {
	                matrix1[i][j] = scanner.nextInt();
	            }
	        }

	        System.out.print("Enter the number of rows for matrix 2: ");
	        int rows2 = scanner.nextInt();
	        System.out.print("Enter the number of columns for matrix 2: ");
	        int cols2 = scanner.nextInt();

	        int[][] matrix2 = new int[rows2][cols2];
	        System.out.println("Enter the elements of matrix 2:");

	        for (int i = 0; i < rows2; i++) {
	            for (int j = 0; j < cols2; j++) {
	            	System.out.println("Enter "+"the elements :");
	                matrix2[i][j] = scanner.nextInt();
	            }
	        }

	        scanner.close();

	        int[][] result = matrix.multiplyMatrices(matrix1, matrix2);

	        System.out.println("Matrix Product:");
	        for (int[] row : result) {
	            for (int element : row) {
	                System.out.print(element + " ");
	            }
	            System.out.println();
	        }
	    

	}

}

//output
//Enter the number of rows for matrix 1: 2 
//Enter the number of columns for matrix 1: 2
//Enter the elements of matrix 1:
//2 4
//4 6
//Enter the number of rows for matrix 2: 2
//Enter the number of columns for matrix 2: 2
//Enter the elements of matrix 2:
//3
//6
//5
//6
//Matrix Product:
//26 36 
//42 60
