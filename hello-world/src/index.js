// Dependencias
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
//Assets
import './index.css';

//import App from './componentes/App'; 
//import ReactDOM from 'react-dom';
//import registerServiceWorker from './registerServiceWorker';

//Routers
import AppRoutes from './routes';

render(
	<Router>
		<AppRoutes />
	</Router>, 
	document.getElementById('root')
);
//registerServiceWorker();
