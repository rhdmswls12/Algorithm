import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		int N = scan.nextInt();
		int[] switches = new int[N];
		for (int i=0; i<N; i++) {
			switches[i] = scan.nextInt();
		}
		int count = scan.nextInt();
		
		for (int i=0; i<count; i++) {
			int std = scan.nextInt();
			int num = scan.nextInt();
			
			if (std == 1) { // 남학생
				for (int j=0; j<N; j++) {
					if ((j+1) % num == 0) {
						switches[j] = switches[j] == 1 ? 0 : 1;
					}
				}
			} else { // 여학생
				switches[num-1] = switches[num-1] == 1 ? 0 : 1;
				int cnt = 1;
				while(num-1-cnt >=0 && num-1+cnt < N) {
					if (switches[num-1-cnt] == switches[num-1+cnt]) {
						switches[num-1-cnt] = switches[num-1-cnt] == 1 ? 0 : 1;
						switches[num-1+cnt] = switches[num-1+cnt] == 1 ? 0 : 1;
					} else {
						break;
					}
					cnt++;
				}
			}
		}
		for (int i=0; i<switches.length; i++) {
			System.out.print(switches[i]+" ");
			if ((i+1) % 20 == 0) System.out.println();
		}
	}
}
