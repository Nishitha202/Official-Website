package labprgm1;

import java.util.Scanner;

public class calculator {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
double res;
Scanner d=new Scanner(System.in);
System.out.println("select the operator no:"
		                           +"\n 1.+"
		                           +"\n 2.-"
		                           +"\n 3.*"
		                           +"\n 4./" );
	  int op=d.nextInt();
	  System.out.println("enter the num1");
	  double num1=d.nextDouble();
	  System.out.println("enter the num1");
	  double num2=d.nextDouble();
	switch(op) {
	case 1:res=num1+num2;
	 System.out.println("the sum of"+num1+"and"+num2+"is"+res);
	  break;
	case 2: res=num1-num2;
	 System.out.println("the diff of"+num1+"and"+num2+"is"+res);
	  break;
	case 3:res=num1*num2;
	 System.out.println("the sum of"+num1+"and"+num2+"is"+res);
	  break; 
	case 4:res=num1/num2;
	 System.out.println("the sum of"+num1+"and"+num2+"is"+res);
	  break;
	default:System.out.println(" invalid choice");
	  break;
	}
	
	}
}
