import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
	static int[] answer;
	static int N;
	static int M;
	static int[] array;
	static StringBuilder sb = new StringBuilder();
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		N = Integer.parseInt(st.nextToken());
		M = Integer.parseInt(st.nextToken());
		answer = new int[M];
		array = new int[N];
		
		for (int i=1; i<=N; i++) {
			array[i-1] = i;
		}
		perm(0);
		System.out.println(sb);
	}
	static void perm(int depth) {
		if (depth == M) {
			for (int val: answer) {
				sb.append(val).append(' ');
			}
			sb.append("\n");
			return;
		}
		for (int i=0; i<N; i++) {
			answer[depth] = array[i];
			perm(depth+1);
		}
	}

}
