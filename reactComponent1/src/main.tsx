import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {NotFoundPage} from './components/NotFoundPage/NotFoundPage';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <React.StrictMode>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/aboutUs" />
                <Route path="/aboutUs" />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>

        </React.StrictMode>
    </BrowserRouter>,
)
