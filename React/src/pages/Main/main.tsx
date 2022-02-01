import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar';

import '../../../public/index.scss';
import { TodoForm } from '../../components/TodoForm';

const Main: React.FC = () => {
	return (
		<>
			<Navbar></Navbar>
			<div className='container'>
				<TodoForm />
			</div>
		</>
	);
};

export default Main;
