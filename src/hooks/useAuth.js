import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { createUser } from '../services/user.services';
import { AuthContext } from '../store';

export const useAuth = () => {
    const navigate = useNavigate();
    const { user, setUser } = useContext(AuthContext);
    const storage = window.localStorage;

    useEffect(() => {
        const userLocal = storage.getDecryptedItem('user');
        if (userLocal) {
            setUser({ isLoggedIn: true, data: userLocal });
            navigate('/');
        }
    }, [navigate, setUser, storage]);

    const googleSignInSuccessHandler = async credentialResponse => {
        console.log(credentialResponse);
        const token = jwtDecode(credentialResponse.credential);
        console.log(token);
        setUser({ isLoggedIn: true, data: token });
        try {
            const res = await createUser(token);
            console.log('googleData login', { res });
            localStorage.setItem('token', res.data.authToken);
            storage.setEncryptedItem('user', JSON.stringify({ isLoggedIn: true, data: token }));
            navigate('/');
        } catch (error) {
            console.log('Something went wrong', error.message);
        }
    };

    const googleSignInFailedHandler = params => {
        console.log('Login Failed', { params });
    };

    const googleLoggedOutHandler = () => {
        googleLogout();
        setUser({ isLoggedIn: false, data: {} });
        storage.removeItem('user');
        storage.removeItem('token');
    };

    return {
        user,
        googleSignInSuccessHandler,
        googleSignInFailedHandler,
        googleLoggedOutHandler,
    };
};

export default useAuth;
