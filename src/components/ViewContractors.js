import React, { useState, useEffect, useReducer } from 'react';
import { bold } from 'ansi-colors';

const ViewContractors = () => {
    // ~> move reducer outside
    // ~> add 'you logged in/you logged out'

    const viewContractorsReducer = (state, action) => {
        switch (action.type) {
            case 'FETCH':
                return action.payload;
            case 'ADD':
                return [...state, action.payload];
            case 'REMOVE':
                return state.filter(
                    contractor => contractor.id !== action.payload.id
                );
            default:
                return state;
        }
    };

    // 3rd param : initial action
    const [contractors, dispatch] = useReducer(viewContractorsReducer, []);

    const fetchContractors = async () => {
        try {
            const res = await fetch(
                'https://jsonplaceholder.typicode.com/users'
            );
            const contractors = await res.json();
            console.log(contractors);
            dispatch({ type: 'FETCH', payload: contractors });
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
                                <th>Delete</th>
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
                                        <td
                                            style={{
                                                fontWeight: 'bold',
                                                color: 'red',
                                                textAlign: 'center',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            x
                                        </td>
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
