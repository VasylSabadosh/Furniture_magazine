import React, { createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserStore from './store/UserStore';
import ItemStore from './store/ItemStore';

export const Context = createContext(null);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
      user: new UserStore(),
      item: new ItemStore(),
    }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context.Provider>

  </React.StrictMode>
);

