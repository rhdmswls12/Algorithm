import java.util.ArrayDeque;
import java.util.Queue;
import java.util.Scanner;

public class Main {
	
	static int N; // 정점 개수
	static int M; // 간선 개수
	static int V; // 탐색 시작 번호
	static boolean[][] adjMatrix;
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		N = scan.nextInt();
		M = scan.nextInt();
		V = scan.nextInt();
		adjMatrix = new boolean[N+1][N+1];
		
		for (int i=0; i<M; i++) {
			int from = scan.nextInt();
			int to = scan.nextInt();
			
			adjMatrix[from][to] = adjMatrix[to][from] = true;
		}
		DFS(V, new boolean[N+1]);
		System.out.println();
		BFS();
		
		scan.close();
	}
	
	private static void DFS(int current, boolean[] visited) {
		int n = adjMatrix.length-1;
		visited[current] = true;
		System.out.print(current+" ");
		
		for (int i=1; i<=n; i++) {
			if (adjMatrix[current][i] && !visited[i]) {
				DFS(i, visited);
			}
		}
	}
	
	private static void BFS() {
		Queue<Integer> queue = new ArrayDeque<>();
		boolean visited[] = new boolean[N+1];
		int n = adjMatrix.length-1;
		
		int current = V; // 시작 정점
		queue.offer(current);
		visited[current] = true;
		
		while(!queue.isEmpty()) {
			current = queue.poll();
			
			System.out.print(current+" ");
			
			for (int i=1; i<=n; i++) {
				if(!visited[i] && adjMatrix[current][i]) {
					queue.offer(i);
					visited[i] = true;
				}
			}
		}
	}
}
