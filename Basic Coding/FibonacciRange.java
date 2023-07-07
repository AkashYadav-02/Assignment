
import java.util.Scanner;

public class FibonacciRange {
public static void main(String [] args) {
		Scanner sc=new Scanner(System.in);
		
		System.out.println("Fibonacci  series upto  elements is :");
	    int n=sc.nextInt();
		int next=0,first=1,second=1;
		for(int i=1;i<=n;i++) {
			 
				System.out.println(first+" ");
				 int nxt=first+second;
				 first=second;
				 second=nxt;
			
		}
	}
}
