import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {NotFoundPage} from './components/NotFoundPage/NotFoundPage';
import Main from './components/Main/Main';
import AboutUs from './components/AboutUs/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import {Provider} from 'react-redux';
import {store} from './store/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/aboutUs" element={<AboutUs/>}/>
                    <Route path="/form" element={<Form/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </React.StrictMode>
        </BrowserRouter>
    </Provider>
)
