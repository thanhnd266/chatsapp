import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './redux/configureStore';
import { Provider } from 'react-redux';
import { extendedApiSlice } from './redux/reducer/messageSlice';

store.dispatch(extendedApiSlice.endpoints.getMessages.initiate());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
