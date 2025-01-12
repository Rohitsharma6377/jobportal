import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminRoute = () => {
    const { user, isAuthenticated } = useSelector((state) => state.auth);
    
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }
    
    return user?.role === 'admin' ? <Outlet /> : <Navigate to="/" />;
};

export default AdminRoute; 