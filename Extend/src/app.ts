// class Person {
// 	constructor(private name: string) {}
// }

// const person = new Person('Test');

// const btn = document.querySelector('#btn');
const btn = document.querySelector('#btn')!; // ! - позволяет указать на корректность выражения

// ? - проверка на наличие переменной
btn?.addEventListener('click', () => {
	console.log('ddd');
});

// ***********

let anyFlag;
const glb = 'msg';

function logInfo(data: string, _a?: number) {
	const test = 'test';
	console.log(data);
	anyFlag = true;
	console.log(anyFlag);
}

logInfo('test');

function multiple(a: number, b: number) {
	if (a && b) {
		return a * b;
	}
	// return a;
}
