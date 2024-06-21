import java.util.Scanner;

public class Main {
	static int N;
	static int M;
	static int[] array;
	static int[] answer = new int[3];
	static int max = 0;
	
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		N = scan.nextInt();
		M = scan.nextInt();
		
		array = new int[N];
		for (int i=0; i<N; i++) {
			array[i] = scan.nextInt();
		}
		makeCombination(0, 0);
		System.out.println(max);
	}
	
	static void makeCombination(int index, int cnt) {
		if (cnt == 3) {
			int result = add(answer);
			if (result <= M) {
				max = Math.max(max, result);
			}
			return;
		}
		for (int i=index; i<N; i++) {
			answer[cnt] = array[i];
			makeCombination(i+1, cnt+1);
		}
	}
	static int add(int[] array) {
		int sum = 0;
		for (int i=0; i<array.length; i++) {
			sum += array[i];
		}
		return sum;
	}
}
