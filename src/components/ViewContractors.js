import React, { useState, useEffect } from 'react';

const ViewContractors = () => {
    const [contractors, setContractors] = useState([]);

    const fetchContractors = async () => {
        try {
            const res = await fetch(
                'https://jsonplaceholder.typicode.com/users'
            );
            const contractors = await res.json();
            console.log(contractors);
            setContractors(contractors);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchContractors();
    }, []);

    return (
        <>
            {contractors.length !== 0 && (
                <>
                    <h2>Contractors</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contractors.map(contractor => {
                                const {
                                    name,
                                    email,
                                    phone,
                                    address: { street, suite, city }
                                } = contractor;
                                return (
                                    <tr key={Math.random()}>
                                        <td>{name}</td>
                                        <td>{email}</td>
                                        <td>
                                            {street}, {suite}, {city}
                                        </td>
                                        <td>{phone}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </>
            )}
        </>
    );
};

export default ViewContractors;
