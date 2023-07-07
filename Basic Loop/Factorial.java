
import java.util.Scanner;

public class Factorial {

	
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter Number");
		int num=sc.nextInt();
		
		int factorial=1;
		for(int i=num;i>0;i--) {
			factorial*=i;
		}
		System.out.println("Factorial of "+num+ " is" + factorial);
	}

}
