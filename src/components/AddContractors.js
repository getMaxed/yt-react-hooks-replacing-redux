import React from 'react';

const AddContractors = () => (
    <>
        <h2>Add New Contractor</h2>
        <form>
            <input type="text" placeholder="name" />
            <br />
            <input type="email" placeholder="email" />
            <br />
            <input type="text" placeholder="address" />
            <br />
            <input type="number" placeholder="phone number" />
            <br /> <br />
            <input type="submit" value="Submit" />
        </form>
    </>
);

export default AddContractors;
