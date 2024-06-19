import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		int cnt = scan.nextInt();
		int N = scan.nextInt();
		int[] array = new int[cnt+1]; 
		array[0] = 0;
		for (int i=0; i<cnt; i++) {
			array[i+1] = array[i] + scan.nextInt();
		}
		for (int i=0; i<N; i++) {
			int start = scan.nextInt();
			int end = scan.nextInt();
			System.out.println(array[end] - array[start-1]);
		}
	}

}