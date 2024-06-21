import java.util.Arrays;
import java.util.Scanner;

public class Main {
	static int[] array = new int[9];
	static boolean[] visited = new boolean[9];
	static int[] answer = new int[7];
	
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		for (int i=0; i<9; i++) {
			array[i] = scan.nextInt();
		}
		
		makeCombination(0, 0);
	}
	static void makeCombination(int index, int cnt) {
		if (cnt == 7) {
			int result = add(answer);
			if (result == 100) {
				for (int a: answer) {
					System.out.println(a);
				}
			}
			return;
		}
		for (int i=index; i<9; i++) {
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
