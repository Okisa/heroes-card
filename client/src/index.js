import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router, browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import routes from './routes';
import HomeContainer from './home/HomeContainer';
import registerServiceWorker from './registerServiceWorker';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';



const store = configureStore();


ReactDOM.render(
<Router history={browserHistory} routes={routes}/>
, document.getElementById('root')

);



