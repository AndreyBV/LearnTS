import React from 'react';
import { useNavigate } from 'react-router-dom';

export const AboutPage: React.FC = () => {
	const navigate = useNavigate();
	const handleBack = () => {
		navigate('/');
	};
	return (
		<>
			<div>ABOUT PAGE</div>
			<button className='btn' onClick={handleBack}>
				Вернуться назад
			</button>
		</>
	);
};
