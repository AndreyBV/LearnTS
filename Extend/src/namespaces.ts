// namespaces - определенные сущности, которые существуют только в TS, позволяющие декомпозировать код, делать его модульным

// ! Переносястся в namespace
// type FormType = 'inline' | 'block';
// type FormState = 'active' | 'disabled';

// interface FormInfo {
// 	type: FormType;
// 	state: FormState;
// }

// class MyForm {
// 	private type: FormType = 'inline';
// 	private state: FormState = 'active';

// 	constructor(public email: string) {}
// 	getInfo() {
// 		return {
// 			type: this.type,
// 			state: this.state,
// 		};
// 	}
// }

// const myForm = new MyForm('v@test.test');

/// <reference path="form-namespace.ts" />
namespace FormNS {
	// функционал реализующий неймспейс необходимо оборачивать в неймспейс с таким же названием
	class MyForm {
		private type: FormType = 'inline';
		private state: FormState = 'active';

		constructor(public email: string) {}
		getInfo(): FormInfo {
			return {
				type: this.type,
				state: this.state,
			};
		}
	}

	export const myForm = new MyForm('v@test.test');
}

console.log(FormNS.myForm);
