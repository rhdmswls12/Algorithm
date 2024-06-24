import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		int N = scan.nextInt();
		int[][] times = new int[N][2];
		int answer = 1;
		
		for (int i=0; i<N; i++) {
			times[i][0] = scan.nextInt();
			times[i][1] = scan.nextInt();
		}
		Arrays.sort(times, (x, y) -> x[1] != y[1] ? x[1]-y[1] : x[0]-y[0]);
		int startTime = times[0][0]; // 첫 번째 회의 시작 시간
		int endTime = times[0][1]; // 첫 번째 회의 종료 시간
		for (int i=1; i<N; i++) {
			if (endTime <= times[i][0]) {
				endTime = times[i][1];
				startTime = times[i][0];
				answer++;
			}
			
		}
		System.out.println(answer);
	}

}
