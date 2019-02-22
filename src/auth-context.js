import React from 'react';

const authContext = React.createContext({
    isAuthenticated: false,
    login: () => {},
    logout: () => {}
});

export default authContext;
