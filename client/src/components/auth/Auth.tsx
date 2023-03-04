import React from 'react';
import { useNavigate } from 'react-router';
import AuthTabs from './AuthTabs';


const Auth: React.FC = () => {
    const navigate = useNavigate();

    React.useEffect(() => {
        if (window.location.pathname == '/' && window.localStorage.getItem('isLogged')) {
            navigate('/home');
        }
    }, []);

    return (
        <AuthTabs />
    )
}

export default Auth