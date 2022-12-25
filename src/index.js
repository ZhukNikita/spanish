import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, HashRouter} from "react-router-dom";
import Store from "./mobx/store";

const store = new Store()
export const Context = createContext({
    store
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <Context.Provider value={{store}}>
            <App />
        </Context.Provider>
    </HashRouter>
);


