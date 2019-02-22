import React, { useContext } from 'react';
import AuthContext from '../auth-context';

const Header = ({
    onLoadViewContractors,
    onLoadAddContractors,
    onLoadAuth
}) => {
    const auth = useContext(AuthContext);

    return (
        <>
            <a href="# " onClick={onLoadViewContractors}>
                View Contractors
            </a>{' '}
            |{' '}
            <a href="# " onClick={onLoadAddContractors}>
                Add Contractor
            </a>{' '}
            |{' '}
            {!auth.isAuthenticated ? (
                <a href="# " onClick={onLoadAuth}>
                    Log In
                </a>
            ) : (
                <a href="# " onClick={auth.logout}>
                    Log Out
                </a>
            )}
        </>
    );
};

export default Header;
