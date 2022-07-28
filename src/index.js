import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header className='head'>
      <div className="mainContainer">
        {/* <Selections /> */}
        <App/>
      </div>
    </header>
  </React.StrictMode>
);


