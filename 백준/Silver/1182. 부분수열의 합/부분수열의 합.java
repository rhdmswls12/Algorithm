import java.util.Scanner;

public class Main {

	static int N;
	static int S;
	static int[] arr;
	static boolean[] visited;
	static int answer = 0;
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		N = scan.nextInt();
		S = scan.nextInt();
		arr = new int[N];
		visited = new boolean[N];
		
		for (int i=0; i<N; i++) {
			arr[i] = scan.nextInt();
		}
		subset(0, 0);
		if (S == 0) System.out.println(answer-1);
		else System.out.println(answer);
	}
	static void subset(int index, int sum) {
		if(index == N) {
			if (sum == S) answer++;
			return;
		}
		visited[index] = true;
		subset(index+1, sum+arr[index]);
		visited[index] = false;
		subset(index+1, sum);
	}
}
