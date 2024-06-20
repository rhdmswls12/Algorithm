import java.util.Scanner;

public class Main {
	static int[] answer;
	static boolean[] selected;
	static int N;
	static int M;
	static int[] array;
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		N = scan.nextInt();
		M = scan.nextInt();
		answer = new int[M];
		selected = new boolean[N];
		array = new int[N];
		
		for (int i=1; i<=N; i++) {
			array[i-1] = i;
		}
		perm(0);
	}
	static void perm(int depth) {
		if (depth == M) {
			for (int val: answer) {
				System.out.print(val+" ");
			}
			System.out.println();
			return;
		}
		for (int i=0; i<N; i++) {
			if (!selected[i]) {
				answer[depth] = array[i];
				selected[i] = true;
				perm(depth+1);
				selected[i] = false;
			}
		}
	}

}
