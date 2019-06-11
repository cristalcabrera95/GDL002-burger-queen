import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";

import {DatabProvider} from './context';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
   
<DatabProvider>
    <Router>
        <App />
    </Router>
</DatabProvider>,
 document.getElementById("root")

)
serviceWorker.unregister();