import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		int N = scan.nextInt();
		int count = 0;
		
		while(N > 0) {
			if (N < 0) break;
			if (N % 5 == 0) {
				count += N/5;
				N %= 5;
			} else {
				N -= 3;
				count++; 
			}
		}
		if (N == 0) {
			System.out.println(count);
		} else {
			System.out.println(-1);
		}
	}

}
