import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Main {
	static int[] minOccurs;
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		int S = scan.nextInt();
		int P = scan.nextInt();
		char[] dna = scan.next().toCharArray();
		minOccurs = new int[4];
		int answer = 0;
		
		for (int i=0; i<4; i++) {
			minOccurs[i] = scan.nextInt();
		}
		
		Map<Character, Integer> map = new HashMap<>();
		map.put('A', 0);
		map.put('C', 0);
		map.put('G', 0);
		map.put('T', 0);
		
		for (int i=0; i<P; i++) {
			map.put(dna[i], map.get(dna[i])+1);
		}
		if (check(map)) answer++;
		
		for (int i=1; i<=S-P; i++) {
			char delKey = dna[i-1];
			char addKey = dna[i-1+P];
			
			map.put(delKey, map.get(delKey)-1);
			map.put(addKey, map.get(addKey)+1);
			
			if (check(map)) answer++;
		}
		
		System.out.println(answer);
	}
	
	static boolean check(Map<Character, Integer> map) {
		for (Character key: map.keySet()) {
			if (key == 'A') {
				if (map.get(key) < minOccurs[0]) return false;
			} else if (key == 'C') {
				if (map.get(key) < minOccurs[1]) return false;
			} else if (key == 'G') {
				if (map.get(key) < minOccurs[2]) return false;
			} else if (key == 'T') {
				if (map.get(key) < minOccurs[3]) return false;
			}
		}
		return true;
	}
}
