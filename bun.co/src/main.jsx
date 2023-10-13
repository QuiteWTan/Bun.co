import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './pages/redux/store.jsx'
import { Provider } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        <ToastContainer
          position='top-right'
          autoClose={3000}
          closeOnClick
        >
        </ToastContainer>
        <App />
      </Provider>
  </React.StrictMode>,
)
