import React from 'react';
import './styles/app.scss';
import { Outlet } from 'react-router';
import useHttp from './hooks/useHttp';
import { useAuthStore } from './store';

function App() {
	const setUser = useAuthStore(state => state.setUser);
	const setIsLogged = useAuthStore(state => state.setIsLogged);

	React.useEffect(() => {
		if (window.localStorage.getItem('isLogged')
			&& window.localStorage.getItem('token')
			&& window.localStorage.getItem('id')) {
			useHttp('check', {
				id: window.localStorage.getItem('id'),
				token: window.localStorage.getItem('token')
			})
				.then(res => {
					setUser({ username: res.username, email: res.email, token: res.nonhashedToken, id: res._id });
					setIsLogged(true);
					console.log('user checked')
				})
				.catch(err => console.log(err.response.data));
		}
	}, []);

	return (
		<div className="app">
			<Outlet />
		</div>
	)
}

export default App;
