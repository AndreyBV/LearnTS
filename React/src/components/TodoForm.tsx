import React, { useState, useRef } from 'react';

interface TodoFromProps {
	onAdd(title: string): void;
}

export const TodoForm: React.FC<TodoFromProps> = props => {
	// ! const [title, setTitle] = useState('');

	const ref = useRef<HTMLInputElement>(null);

	// const [title, setTitle] = useState<string>('');

	// const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setTitle(event.target.value);
	// };
	const handleKeyPress = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			console.log(ref.current!.value);
			props.onAdd(ref.current!.value);
			ref.current!.value = '';
			// console.log(title);
			// setTitle('');
		}
	};

	return (
		<div className='input-field mt2'>
			<input
				// onChange={handleChange}
				// value={title}
				ref={ref}
				type='text'
				id='title'
				placeholder='Введите название задачи'
				onKeyPress={handleKeyPress}
			/>
			<label htmlFor='title' className='active'>
				Введите название задачи
			</label>
		</div>
	);
};
