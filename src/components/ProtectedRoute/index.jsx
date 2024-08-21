import { Navigate, Outlet } from 'react-router-dom'


const PrivateRoutes = () => {
    const userData = localStorage.getItem('user') ? JSON.parse(localStorage.getDecryptedItem('user')) : "";
    const auth = userData.isLoggedIn;
    return (
        auth ? <Outlet /> : <Navigate to='/login' />
    )
}


export default PrivateRoutes;