const cars: string[] = ['Ford', 'Audi']; // Используется чаще
const cars2: Array<string> = ['Ford', 'Audi'];

// const promise = new Promise<string>(resolve => {
// 	setTimeout(() => {
// 		resolve('Promise res');
// 	}, 2000);
// });
const promise: Promise<string> = new Promise(resolve => {
	setTimeout(() => {
		resolve('Promise res');
	}, 2000);
});

promise.then(data => {
	console.log(data.trim());
});

// ! ******************

// function mergeObjects(a: object, b: object) {
// 	return Object.assign({}, a, b);
// }

// function mergeObjects<T, R>(a: T, b: R): T & R {
// 	return Object.assign({}, a, b);
// }

function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R {
	return Object.assign({}, a, b);
}

const merged1 = mergeObjects({ name: 'Test' }, { age: 22 });
console.log(merged1.age);
console.log(merged1.name);
// console.log(merged.test);

// const merged2 = mergeObjects('aaa', 'bbb');
// const merged2 = mergeObjects({ a: 1 }, '12');
const merged2 = mergeObjects({ a: 1 }, { b: 2 });
console.log(merged2);

// ! **************

// function withCount(value) {
// 	return {
// 		value,
// 		count: `В этом объекте ${value.length} символов`,
// 	};
// }

// function withCount<T>(value: T): { value: T; count: string } {
// 	return {
// 		value,
// 		count: `В этом объекте ${value.length} символов`,
// 	};
// }

interface ILength {
	length: number;
}

function withCount<T extends ILength>(value: T): { value: T; count: string } {
	return {
		value,
		count: `В этом объекте ${value.length} символов`,
	};
}
console.log(withCount('Test Test'));
console.log(withCount(['1', 2, 3]));
console.log(withCount({ length: 20 }));
// console.log(withCount(22));

// ! ********************

// function getObjectValue(obj: object, key: string) {
// 	return obj[key];
// }
function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
	return obj[key];
}

const person = {
	name: 'test',
	age: 22,
};
console.log(getObjectValue(person, 'name'));
console.log(getObjectValue(person, 'age'));
// console.log(getObjectValue(person, 'test'));

// ! *****************

// class Collection {
// 	private _items: any[];

// 	add(item) {
// 		this._items.push(item);
// 	}
// 	remove(item) {
// 		this._items = this._items.filter(i => i !== item);
// 	}
// 	get(items) {
// 		return this._items;
// 	}
// }
class Collection<T extends number | string | boolean> {
	constructor(private _items: T[] = []) {}

	add(item: T) {
		this._items.push(item);
	}
	remove(item: T) {
		this._items = this._items.filter(i => i !== item);
	}
	get items(): T[] {
		return this._items;
	}
}

const strings = new Collection<string>(['1', '2', 'Test']);
strings.add('UPS');
strings.remove('2');
console.log(strings.items);

const numbers = new Collection<number>([1, 2, 4]);
numbers.add(11);
numbers.remove(2);
console.log(numbers.items);

// const objects = new Collection([{ a: 1 }, { b: 4 }]);
// objects.remove({ b: 4 });
// console.log(objects.items);

// ! *****************

interface Car {
	model: string;
	year: number;
}

// function createAndValidateCar(model: string, year: number) {
// 	const car: Car = {};

// 	if (model.length > 3) {
// 		car.model = model;
// 	}
// 	if (year > 2000) {
// 		car.year = year;
// 	}

// 	return car;
// }

function createAndValidateCar(model: string, year: number): Car {
	const car: Partial<Car> = {}; // Partial - создание временный объект без полей

	if (model.length > 3) {
		car.model = model;
	}
	if (year > 2000) {
		car.year = year;
	}

	return car as Car;
}

// ! *****************

// const sportCars: Array<string> = ['Ford', 'Audi'];
const sportCars: Readonly<Array<string>> = ['Ford', 'Audi'];
// sportCars.shift();

const ford: Readonly<Car> = {
	model: 'Ford',
	year: 2020,
};
// ford.model = 'Ferrari';
