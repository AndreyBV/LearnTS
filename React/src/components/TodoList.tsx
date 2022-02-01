import React from 'react';
import { ITodo } from '../interfaces';

type TodoListProps = {
	// todos: any[];
	todos: ITodo[];
	onToggle(id: number): void;
	onRemove: (id: number) => void;
};

export const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
	if (todos.length === 0) {
		return <p className='center'>Список задач пуст</p>;
	}

	const handleRemove = (event: React.MouseEvent, id: number) => {
		// event.stopPropagation();
		event.preventDefault();
		onRemove(id);
	};

	return (
		<ul>
			{todos.map(todo => {
				const classes = ['todo'];
				if (todo.completed) {
					classes.push('completed');
				}

				return (
					// <li className='todo' key={todo.id}>
					<li className={classes.join(' ')} key={todo.id}>
						<label>
							<input
								type='checkbox'
								checked={todo.completed}
								onChange={onToggle.bind(null, todo.id)}
							/>
							<span> {todo.title} </span>
							<i
								className='material-icons red-text'
								onClick={event => handleRemove(event, todo.id)}
							>
								delete
							</i>
						</label>
					</li>
				);
			})}
		</ul>
	);
};
