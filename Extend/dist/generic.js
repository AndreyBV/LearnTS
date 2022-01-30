"use strict";
const cars = ['Ford', 'Audi'];
const cars2 = ['Ford', 'Audi'];
const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve('Promise res');
    }, 2000);
});
promise.then(data => {
    console.log(data.trim());
});
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged1 = mergeObjects({ name: 'Test' }, { age: 22 });
console.log(merged1.age);
console.log(merged1.name);
const merged2 = mergeObjects({ a: 1 }, { b: 2 });
console.log(merged2);
function withCount(value) {
    return {
        value,
        count: `В этом объекте ${value.length} символов`,
    };
}
console.log(withCount('Test Test'));
console.log(withCount(['1', 2, 3]));
console.log(withCount({ length: 20 }));
function getObjectValue(obj, key) {
    return obj[key];
}
const person = {
    name: 'test',
    age: 22,
};
console.log(getObjectValue(person, 'name'));
console.log(getObjectValue(person, 'age'));
class Collection {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(i => i !== item);
    }
    get items() {
        return this._items;
    }
}
const strings = new Collection(['1', '2', 'Test']);
strings.add('UPS');
strings.remove('2');
console.log(strings.items);
const numbers = new Collection([1, 2, 4]);
numbers.add(11);
numbers.remove(2);
console.log(numbers.items);
function createAndValidateCar(model, year) {
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    return car;
}
const sportCars = ['Ford', 'Audi'];
const ford = {
    model: 'Ford',
    year: 2020,
};
//# sourceMappingURL=generic.js.map