import React, { useState, useEffect } from 'react';

import '../../../public/index.scss';
import { TodoForm } from '../../components/TodoForm';
import { TodoList } from '../../components/TodoList';
import { ITodo } from '../../interfaces';

// Иногда confirm может работать не корректно, по аналогии было с process.env.NODE_ENV в настройке вебпака
declare var confirm: (question: string) => boolean;

const MainPage: React.FC = () => {
	const [todos, setTodos] = useState<ITodo[]>([]);

	useEffect(() => {
		const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
		setTodos(saved);
	}, []);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const addHandler = (title: string) => {
		console.log('add', title);
		const newTodo: ITodo = {
			title: title,
			id: Date.now(),
			completed: false,
		};
		// setTodos([newTodo, ...todos]);
		setTodos(prev => [newTodo, ...prev]);
	};

	const handleToggle = (id: number) => {
		setTodos(prev =>
			prev.map(todo => {
				if (todo.id == id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		);
	};
	const handleRemove = (id: number) => {
		const shouldRemove = window.confirm('Продолжить?');
		if (shouldRemove) setTodos(prev => prev.filter(todo => todo.id !== id));
	};

	return (
		// <React.Fragment></React.Fragment> or <></>
		<>
			<TodoForm onAdd={addHandler} />
			<TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
		</>
	);
};

export default MainPage;
