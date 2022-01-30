// Декораторы - синтаксический сахар
// 4 вида декораторов (для классов, свойств, методов классов, геттеров и сеттеров)
// Есть ни что иное, как обычные функции
// Декоратор вызывается тогда, когда описывается какой-либо класс

// function DecClass(constructor: Function) {
// 	console.log(constructor);
// }
// function DecProp(target: any, propName: string | Symbol) {
// 	console.log(target);
// 	console.log(propName);
// }
// function DecFunc(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {
// 	console.log(target);
// 	console.log(propName);
// 	console.log(descriptor);
// }
// function DecGetSet(
// 	target: any,
// 	propName: string | Symbol,
// 	descriptor: PropertyDescriptor
// ) {
// 	console.log(target);
// 	console.log(propName);
// 	console.log(descriptor);
// }

// @DecClass
// class Component {
// 	@DecProp
// 	name: string;

// 	constructor(name: string) {
// 		this.name = name;
// 	}

// 	@DecGetSet
// 	get componentName() {
// 		return this.name;
// 	}

// 	@DecFunc
// 	logName(): void {
// 		console.log(`This ${this.name}`);
// 	}
// }

interface ICompnentDecorator {
	selector: string;
	template: string;
}

function Component(config: ICompnentDecorator) {
	return function <T extends { new (...args: any[]): object }>(Constructor: T) {
		return class extends Constructor {
			constructor(...args: any[]) {
				super(...args);
				const el = document.querySelector(config.selector)!;
				el.innerHTML = config.template;
			}
		};
	};
}

function Bind(
	_target: any,
	_propName: any,
	descriptor: PropertyDescriptor
): PropertyDescriptor {
	const originalDes = descriptor.value; // содержит ссылку на метод
	return {
		configurable: true,
		enumerable: false,
		get() {
			return originalDes.bind(this);
		},
	};
}

@Component({
	selector: '#card',
	template: ` <div class="card">
	<div class="card-content"><span class='card-title'>Card cmp</div> 
	</div>`,
})
class CardComponent {
	constructor(public name: string) {}

	@Bind
	logName(): void {
		console.log(`This ${this.name}`);
	}
}

const card = new CardComponent('Card Comp');

const button = document.querySelector('#btn')!;
// btn.addEventListener('click', card.logName.bind(card)); // Решение - можно создать собственный декоратор, который будет байндить любые методы на нужный контекст
btn.addEventListener('click', card.logName);

// ! **********************

type ValidatorType = 'required' | 'email';

interface IValidatorConfig {
	[prop: string]: {
		[validateProp: string]: ValidatorType;
	};
}

const validators: IValidatorConfig = {};
function Required(target: any, propName: string) {
	validators[target.constructor.name] = {
		...validators[target.constructor.name],
		[propName]: 'required',
	};
}

function validate(obj: any): boolean {
	const objConfig = validators[obj.constructor.name];
	if (!objConfig) return true;

	let isValid = true;
	Object.keys(objConfig).forEach(key => {
		if (objConfig[key] === 'required') {
			isValid = isValid && !!obj[key];
		}
	});
	return isValid;
}

class Form {
	@Required
	public email: string | void;
	constructor(email?: string) {
		this.email = email;
	}
}

const form = new Form();
if (validate(form)) {
	console.log('Valid: ', form);
} else {
	console.log('Valid Err');
}
