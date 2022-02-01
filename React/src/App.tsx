import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AboutPage } from './pages/About/AboutPage';

import MainPage from './pages/Main/MainPage';

const App: React.FunctionComponent = () => {
	return (
		<BrowserRouter>
			<Navbar></Navbar>
			<div className='container'>
				<Routes>
					<Route element={<MainPage />} path='/' />
					<Route element={<AboutPage />} path='/about' />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
