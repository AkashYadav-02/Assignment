

import java.util.Scanner;


public class Prime {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter Number");
		int num=sc.nextInt();
	    if(num==1) {
	    	System.out.println(" Number is Prime ");
	    }
	    else {
	    	for(int i=2;i<num/2;i++) {
	    		if(num%i==0) {
	    			System.out.println(" Number is Not Prime ");
	    			break;
	    			
	    		}
	    		
	    		System.out.println(" Number is Prime ");
	    	}
	    }
		

	}

}
