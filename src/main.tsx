import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {NotFoundPage} from './components/NotFoundPage/NotFoundPage';
import Main from './components/Main/Main';
import AboutUs from './components/AboutUs/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <React.StrictMode>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/aboutUs" element={<AboutUs/>}/>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </React.StrictMode>
    </BrowserRouter>,
)
