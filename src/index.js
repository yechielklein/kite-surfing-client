import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const rootElement = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElement);

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);