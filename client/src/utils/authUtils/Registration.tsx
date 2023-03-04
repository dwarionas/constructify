import { Button } from '@mui/material';
import { useCallback } from 'react';
import { NavigateFunction, useNavigate } from 'react-router';
import useHttp from '../../hooks/useHttp';
import { useAuthStore } from '../../store';

interface IProps {
    username: string;
    email: string;
    password: string;
}

const Registration: React.FC<IProps> = ({ username, email, password }) => {
    const navigate = useNavigate();

    const setUser = useAuthStore(state => state.setUser);
    const setIsLogged = useAuthStore(state => state.setIsLogged);

    const onRegister = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        useHttp('register', { username, email, password })
            .then(res => {
                setUser({ username: res.username, email: res.email, token: res.nonhashedToken, id: res._id });
                setIsLogged(true);
                window.localStorage.setItem('isLogged', 'true');
                window.localStorage.setItem('id', res._id);
                window.localStorage.setItem('token', res.nonhashedToken);
                navigate('/home');
            })
            .catch(err => console.log(err.response.data));
    }

    return (
        <Button
            sx={{ mt: 2 }}
            type="submit"
            variant="contained"
            onClick={(e) => onRegister(e)}
        >
            Register
        </Button>
    );
};

export default Registration;