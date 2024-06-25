import java.util.Scanner;

public class Main {

	static int R;
	static int C;
	static char[][] map;
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		R = scan.nextInt();
		C = scan.nextInt();
		map = new char[R][C];
		int answer = 0;
		
		for (int i=0; i<R; i++) {
			map[i] = scan.next().toCharArray();
		}
		for (int i=0; i<R; i++) {
			if (dfs(i, 0)) answer++;
		}
		System.out.println(answer);
	}
	static boolean dfs(int x, int y) {
		map[x][y] = '-';
		if (y == C-1) return true;
		if (x > 0 && map[x-1][y+1] == '.') {
			if (dfs(x-1, y+1)) return true;
		}
		if (map[x][y+1] == '.') {
			if (dfs(x, y+1)) return true;
		}
		if (x+1 < R && map[x+1][y+1] == '.') {
			if (dfs(x+1, y+1)) return true;
		}
		return false;
	}
}
