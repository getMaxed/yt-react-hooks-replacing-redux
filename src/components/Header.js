import React from 'react';

const Header = ({
    onLoadViewContractors,
    onLoadAddContractors,
    onLoadAuth
}) => (
    <>
        <a href="# " onClick={onLoadViewContractors}>
            View Contractors
        </a>{' '}
        |{' '}
        <a href="# " onClick={onLoadAddContractors}>
            Add Contractor
        </a>{' '}
        |{' '}
        <a href="# " onClick={onLoadAuth}>
            Sign In
        </a>
    </>
);

export default Header;
