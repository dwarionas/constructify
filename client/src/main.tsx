import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import router from './router';
import './styles/main.scss'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <RouterProvider router={router} />
);