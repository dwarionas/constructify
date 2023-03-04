import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';

import App from '../App';
import ErrorPage from '../utils/error';
import Auth from '../components/auth/Auth';
import Home from '../components/home/Home';
import Workshop from '../components/workshop/Workshop';

interface IProps {
    elem: React.ElementType;
}

const PrivateRoute: React.FC<IProps> = ({ elem: Component }) => {
    return window.localStorage.getItem('isLogged') ? <Component /> : <Navigate to={'/'} />;
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />} errorElement={<ErrorPage />}>
            <Route index element={<Auth />} />
            <Route path='home' element={<PrivateRoute elem={Home} />} />
            <Route path='workshop' element={<PrivateRoute elem={Workshop} />} />
        </Route>
    )
);

export default router;
