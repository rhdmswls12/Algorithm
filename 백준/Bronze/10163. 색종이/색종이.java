import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int N = scan.nextInt();
		int[] count = new int[N+1];
		int[][] map = new int[1001][1001];
		
		for (int i=1; i<=N; i++) {
			int x = scan.nextInt();
			int y = scan.nextInt();
			int width = scan.nextInt();
			int height = scan.nextInt();
			
			for (int j=x; j<x+width; j++) {
				for (int k=y; k<y+height; k++) {
					map[j][k] = i;
				}
			}
		}
		
		for (int i=0; i<1001; i++) {
			for (int j=0; j<1001; j++) {
				count[map[i][j]]++;
			}
		}
		for (int i=1; i<=N; i++) {
			System.out.println(count[i]);
		}
	}

}
