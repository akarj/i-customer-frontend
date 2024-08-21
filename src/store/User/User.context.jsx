import { useState } from "react";
import propTypes from 'prop-types';
import { AuthContext } from "..";

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        loggedIn: false,
        data: null,
    });

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

UserProvider.propTypes = {
    children: propTypes.node
}

export default UserProvider;