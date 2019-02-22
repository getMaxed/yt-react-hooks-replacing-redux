import React, { useState } from 'react';
import Header from './components/Header';
import ViewContractors from './components/ViewContractors';
import AddContractors from './components/AddContractors';
import Auth from './components/Auth';

export default function App() {
    const [page, setPage] = useState('viewContractors');

    const switchPage = pageName => {
        setPage(pageName);
    };

    const currentPage = () => {
        if (page === 'viewContractors') {
            return <ViewContractors />;
        } else if (page === 'addContractors') {
            return <AddContractors />;
        } else {
            return <Auth />;
        }
    };

    return (
        <>
            <Header
                onLoadViewContractors={switchPage.bind(this, 'viewContractors')}
                onLoadAddContractors={switchPage.bind(this, 'addContractors')}
                onLoadAuth={switchPage.bind(this, 'auth')}
            />
            {currentPage()}
        </>
    );
}
