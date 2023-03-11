import React from 'react';
import ReactDOM from 'react-dom/client';
import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import './index.css';
import './styles/app.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BASE_API_URL } from './constants/config';
import { getToken } from './services/auth.service';
import { getParameterByName } from './utils/StringUtil';

axios.defaults.baseURL = BASE_API_URL;

axios.interceptors.request.use(
	function (config: any) {
		if (!config.headers?.['x-auth-token']) {
			const token = getToken();      
			config.headers = { ...config.headers, 'x-auth-token': token || '' };
		}
		return config;
	},
	function (error) {
		return Promise.reject(error);
	},
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <Router>
            <App />
        </Router>    
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
