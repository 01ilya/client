import ReactDOM from 'react-dom/client';
import React, { createContext } from 'react';
import './index.css';
import App from './App';
import UserStore from './store/UserStore';
import DeviceStore from './store/DeviceStore';
import reportWebVitals from './reportWebVitals';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        user: new UserStore(),
        device: new DeviceStore(),
      }}
    >
      <App/>
    </Context.Provider>
  </React.StrictMode>
);
  reportWebVitals();

  