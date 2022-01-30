namespace FormNS {
	// по дефолту все сущности неймспейсов приватны (чтобы этого избежать используется ключевое слово export)
	export type FormType = 'inline' | 'block';
	export type FormState = 'active' | 'disabled';

	export interface FormInfo {
		type: FormType;
		state: FormState;
	}
}
