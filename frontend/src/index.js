import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Workoutscontextprovider } from './contexts/workoutcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Workoutscontextprovider>
    <App />
  
    </Workoutscontextprovider>
   
  </React.StrictMode>
);

