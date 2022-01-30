const arrayOfNumber: Array<number> = [1, 2, 3, 4];
const arrayOfStr: Array<string> = ['1', '2'];

function reverse<T>(array: T[]): T[] {
	return array.reverse();
}

reverse(arrayOfNumber);
reverse(arrayOfStr);
