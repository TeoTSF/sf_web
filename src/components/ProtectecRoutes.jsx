import { useContext, useEffect } from 'react';
import { Navigate, Outlet} from 'react-router-dom';
import MainContext from '../context/MainContext';

const ProtectedRoutes = () => {
    const token = localStorage.getItem('token');
    const { setIsWeb } = useContext(MainContext);

    useEffect(() => {
      setIsWeb(false);
    }, []);

    if (token) {
        return <Outlet />
    } else {
        return <Navigate to='/dashboard/login' />
        // return <Outlet />
    }

};

export default ProtectedRoutes;