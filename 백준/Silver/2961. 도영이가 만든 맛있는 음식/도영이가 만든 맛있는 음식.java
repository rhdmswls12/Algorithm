import java.util.Scanner;

public class Main {
	static int N;
	static boolean[] visited;
	static int[] S;
	static int[] B;
	static int min;
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		N = scan.nextInt();
		S = new int[N];
		B = new int[N];
		visited = new boolean[N];
		min = Integer.MAX_VALUE;
		for (int i=0; i<N; i++) {
			S[i] = scan.nextInt();
			B[i] = scan.nextInt();
		}
		
		subset(0);
		System.out.println(min);
		
		scan.close();
	}
	static void subset(int index) {
		if (index == N) {
			for (int i=0; i<N; i++) {
				if (visited[i]) {
					getTaste();
				}
			}
			return;
		}
		visited[index] = true;
		subset(index+1);
		visited[index] = false;
		subset(index+1);
	}
	static void getTaste() {
		int bitter = 0;
		int sour = 1;
		for (int i=0; i<N; i++) {
			if (visited[i]) {
				bitter += B[i];
				sour *= S[i];
			}
		}
		min = Math.min(min, Math.abs(sour-bitter));
	}
}
