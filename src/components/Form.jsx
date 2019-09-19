import React, { useState } from 'react';
import { Formik } from 'formik';
import axios from 'axios';

import { initialValues, validationSchema, postApi}  from '../data/data';
import RenderForm from './RenderForm';
import RenderUsers from './RenderUsers';

function UserForm () {

    const [users, setUsers] = useState([]);

    function addNewUser (userDetails) {
        const newUser = {
            name: userDetails.name,
            email: userDetails.email,
            password: userDetails.password,
            tos: userDetails.tos,
        }
        setUsers(users.concat([newUser]));
    }
    
    function onSubmit (values, actions) {
        axios.post(postApi, values)
            .then(response => {
               addNewUser(response.data);
            })
            .catch(error => {
                debugger
            })
        actions.resetForm();
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
                />
            </div>
            <div className='users'>
                <h2>User List</h2>
                <RenderUsers userDetails={users} />
            </div>
        </>
    );
}

export default UserForm;