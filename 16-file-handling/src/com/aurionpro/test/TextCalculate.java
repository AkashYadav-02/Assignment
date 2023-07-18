package com.aurionpro.test;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class TextCalculate {
    public static void main(String[] args) {
        String filename = "C:\\Users\\akash.yadav\\Desktop\\store.txt"; // Replace with the path to your input file
        
        int lineCount = 0;
        int charCount = 0;
        int wordCount = 0;
        
        try (BufferedReader br = new BufferedReader(new FileReader(filename))) {
            String line;
            
            while ((line = br.readLine()) != null) {
                lineCount++;
                charCount += line.length();
                wordCount += countWords(line);
            }
        } catch (IOException e) {
            System.out.println("Error reading the file: " + e.getMessage());
        }
        
        System.out.println("Number of lines: " + lineCount);
        System.out.println("Number of characters: " + charCount);
        System.out.println("Number of words: " + wordCount);
    }
    
    private static int countWords(String line) {
        String[] words = line.split("\\s+");
        return words.length;
    }
}

