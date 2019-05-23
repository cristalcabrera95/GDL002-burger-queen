import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Counter from './components/Counter';
import Total from './components/Total'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Counter />, document.getElementById('prueba'));
ReactDOM.render(<Total/>, document.getElementById('pruebafood'));

serviceWorker.unregister();
