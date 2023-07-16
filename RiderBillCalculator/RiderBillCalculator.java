

import java.util.Scanner;

public class RiderBillCalculator {

	public static void main(String[] args) {
		Scanner sc =new Scanner(System.in);
		
		
		
		System.out.println("Enter the hight  :");
		
		
		 
		int hight=sc.nextInt();
		
		if(hight<120) {
			System.out.println("Can't ride ");
		}
		else {
			System.out.println("Enter the age  :");
			
			
			 
			int age=sc.nextInt();
			
			System.out.println("Want photos ");
			String str=sc.next().toLowerCase();
			
			int price=0;
			
			if(age<12) {
				price+=5;
				if(str.equals("yes")) {
					price+=3;
				}
			}
				else if(age>=12 && age<18 ) {
					price+=7;
					if(str.equals("yes")) {
						price+=3;
					}
					
				}
				else if(age>=18 && age<45 ) {
					price+=12;
					if(str.equals("yes")) {
						price+=3;
					}
					
				}
				else if(age>=45 && age<=55 ) {
					price+=0;
					if(str.equals("yes")) {
						price+=3;
					}
					
				}
				else {
					System.out.println("Invalid Age");
				}
			
			
			System.out.println("The total cost is :"+price);
				
			
			
			
			
		}
		sc.close();

	}

}
// /output 
// Enter the hight  :
// 134
// Enter the age  :
// 44
// Want photos 
// yes
// The total cost is :15
