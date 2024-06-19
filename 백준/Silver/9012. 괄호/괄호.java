import java.io.FileInputStream;
import java.util.*;
import java.io.*;
import java.util.Scanner;
import java.util.Stack;

public class Main {

	public static void main(String[] args) throws Exception{
		
		Scanner scan = new Scanner(System.in);
		String answer = "";
		
		int N = scan.nextInt();
	    for(int i=0; i<N; i++) {
	    	System.out.println(check(scan.next()));
	    }
	    		
		
	}
	
	static String check(String str) {
		Stack<Character> stack = new Stack<>();
		
		for (int i=0; i<str.length(); i++) {
			if (str.charAt(i)=='(') {
				stack.push('(');
			} else if (stack.empty()) {
				return "NO";
				
			} else {
				if (stack.size() > 0) {
					stack.pop();
				}
			}
		}
		if (stack.empty()) {
			return "YES";
		} else {
			return "NO";
		}
	}

}
