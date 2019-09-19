import React, { useState } from 'react';
import { Formik } from 'formik';
import axios from 'axios';

import { initialValues, validationSchema, postApi }  from '../data/data';
import RenderForm from './RenderForm';
import RenderUsers from './RenderUsers';

function UserForm () {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState();

    function addNewUser (userDetails) {
        const newUser = {
            name: userDetails.name,
            email: userDetails.email,
            password: userDetails.password,
            role: userDetails.role,
            tos: userDetails.tos,
        }
        setUsers(users.concat([newUser]));
    }
    
    function onSubmit (values, actions) {
        axios.post(postApi, values)
            .then(response => {
                addNewUser(response.data);
            })
            .catch(err => {
               setError(err.message);
            })
        actions.resetForm();
    }

    function validateForm (values, props) {
        const errors = {};
        if (values.email === 'waffle@syrup.com') {
            errors.email = 'That email address is already taken';
        }
        return errors;
    }

    return (
        <>
            <div className='form'>
                <h2>Add New User</h2>
                <Formik 
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    render={RenderForm}
                    validationSchema={validationSchema}
                    validate={validateForm}
                />
                {{error} && <div><p>{error}</p></div>}
            </div>
            <div className='users'>
                <h2>User List</h2>
                <RenderUsers userDetails={users} />
            </div>
        </>
    );
}

export default UserForm;