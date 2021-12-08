import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox';

ReactDOM.render(
	<React.StrictMode>
		<SimpleReactLightbox>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</SimpleReactLightbox>
	</React.StrictMode>,
	document.getElementById('root')
);
