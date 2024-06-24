import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int N = scan.nextInt();
		int total = scan.nextInt();
		int[] wons = new int[N];
		int count = 0;
		
		for (int i=0; i<N; i++) {
			wons[i] = scan.nextInt();
		}
		
		
		for (int i=N-1; i>=0; i--) {
			if (wons[i] <= total) {
				count += (total / wons[i]);
				total %= wons[i];
			}
		}
		System.out.println(count);
	}

}
