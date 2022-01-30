const isFetching: boolean = true;
const isLoading: boolean = false;

let int: number = 42;
// int = '';
const float: number = 4.2;
const num: number = 3e10;
const msg: string = 'Hellot TS';

const numberArray: number[] = [1, 1, 2, 3, 5, 8];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8];

const words: string[] = ['Hello', 'TS'];

// Tuple
const contact: [string, number] = ['TS', 123];

// Any
let vaiable: any = 42;
vaiable = 'New str';

// Function
function sayPhrase(name: string): void {
	console.log(name);
}
sayPhrase('test');

// Never (Используется в 2 случаях: 1 - функция возвращает ошибку, 2 - бесконечное выполнение кода)
function throwError(msg: string): never {
	throw new Error(msg);
}
function inf(): never {
	while (true) {}
}

// Type - создание пользовательских типов
type Login = string;
const login: Login = 'test';
// const login2: Login = 2;

type ID = string | number;
const id1: ID = 123;
const id2: ID = 'id';
// const id3: ID = false;

type SomeType = string | null | undefined;
