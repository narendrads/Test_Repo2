import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import App from './App';
import {LoginComponent} from'./component/login/login.component'
import { NetflixIndext } from './neflix/netxflixindex/netflixindex';
import { Databainding } from './data_bainding-component/data-Compont.component';
import { ArrayData } from './data_bainding-component/data-Compont.componentarraydata'; 
import reportWebVitals from './reportWebVitals';
import { ArrayOfObjectsData } from './data_bainding-component/data-ArrayOfObjects.databainding';
import { NesteData } from './data_bainding-component/NestedData';
import { DataImgCard } from './data_bainding-component/data.imgCard';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NetflixIndext/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
