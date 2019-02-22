import React, { useState } from 'react';

import Header from './components/Header';
import ViewContractors from './components/ViewContractors';
import AddContractors from './components/AddContractors';
import Auth from './components/Auth';
import AuthContext from './auth-context';

export default function App() {
    const [page, setPage] = useState('viewContractors');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const switchPage = pageName => {
        setPage(pageName);
    };

    const currentPage = () => {
        if (page === 'viewContractors') {
            return <ViewContractors />;
        } else if (page === 'addContractors') {
            return <AddContractors />;
        } else {
            return (
                <>
                    <br />
                    <br />
                    <Auth />
                </>
            );
        }
    };

    const login = () => {
        setIsAuthenticated(true);
        switchPage('viewContractors');
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    return (
        <>
            <AuthContext.Provider
                value={{
                    isAuthenticated,
                    login,
                    logout
                }}
            >
                <Header
                    onLoadViewContractors={switchPage.bind(
                        this,
                        'viewContractors'
                    )}
                    onLoadAddContractors={switchPage.bind(
                        this,
                        'addContractors'
                    )}
                    onLoadAuth={switchPage.bind(this, 'auth')}
                />
                {currentPage()}
            </AuthContext.Provider>
        </>
    );
}
