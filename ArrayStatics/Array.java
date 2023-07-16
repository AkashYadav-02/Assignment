
public class Array {

	public static void main(String[] args) {

		int n = Integer.parseInt(args[0]);

		int arr[] = new int[n];

		for (int i = 0; i < n; i++) {
			arr[i] = Integer.parseInt(args[i + 1]);

		}
		for (int i = 0; i < n; i++) {
			System.out.print(arr[i] + " ");
		}

		System.out.println("*-------------------------*");
		System.out.println("Sum of Array is :" + sum(arr, n));
		double average = (double) sum(arr, n) / n;
		System.out.println("Average  of Array is :" + average);
		System.out.println("Minimum  of Array is :" + minimum(arr, n));
		System.out.println("Minimum  of Array is :" + maximum(arr, n));
		System.out.println("Midian  of Array is :" + midian(arr, n));
		System.out.println("Frequency of Each number in array is :");
		printFrequency(arr);

	}

	public static void printFrequency(int[] arr) {

		int maxNumber = Integer.MIN_VALUE;
		for (int number : arr) {
			if (number > maxNumber) {
				maxNumber = number;
			}
		}
		int[] frequency = new int[maxNumber + 1];
		for (int number : arr) {
			frequency[number]++;
		}
		for (int i = 0; i < frequency.length; i++) {
			if (frequency[i] > 0) {
				System.out.println("Number: " + i + ", Frequency: " + frequency[i]);
			}
		}
	}

	private static double midian(int arr[], int n) {
		double median;

		if (n % 2 == 0) {
			int mid1 = n / 2 - 1;
			int mid2 = n / 2;
			median = (double) (arr[mid1] + arr[mid2]) / 2;
		} else {
			median = arr[n / 2];

		}
		return median;

	}

	private static int maximum(int[] arr, int n) {
		int max = Integer.MIN_VALUE;
		;
		for (int i = 0; i < n; i++) {
			max = Math.max(max, arr[i]);
		}
		return max;

	}

	private static int minimum(int[] arr, int n) {
		int min = Integer.MAX_VALUE;
		for (int i = 0; i < n; i++) {
			min = Math.min(min, arr[i]);
		}
		return min;

	}

	private static int sum(int[] arr, int n) {
		int sum = 0;
		for (int i = 0; i < n; i++) {
			sum += arr[i];
		}
		return sum;
	}
}
