import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const postApi = 'https://reqres.in/api/users';

const initialValues = {
    name: '',
    email: '',
    password: '',
    tos: false,
}

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Name is too short')
        .max(50, 'Name is too long')
        .required('Please provide a name'),
    email: Yup.string()
        .email('Email is invalid')
        .required('Please provide a valid email address'),
    password: Yup.string()
        .min(5, 'Password is too short')
        .required('Please provide a valid password'),
    tos: Yup.boolean()
        .required('Please agree to the terms of service'),
})

function renderForm (props) {
    return ( 
        <Form>
            <div>
                <label htmlFor='name'>Name: </label>
                <Field type="text" name="name" />
                <ErrorMessage name='name' component='span' />
            </div>
            <div>
                <label htmlFor='email'>Email: </label>
                <Field type="email" name="email" />
                <ErrorMessage name='email' component='span' />
            </div>
            <div>
                <label htmlFor='password'>Password: </label>
                <Field type="password" name="password" />
                <ErrorMessage name='password' component='span' />
            </div>
            <div>
                <Field type="checkbox" name="tos" />
                <label htmlFor='tos'>I agree to the Terms of Service</label>
                <ErrorMessage name='tos' component='span' />
            </div>
            <button type="submit">
                Submit
            </button>
        </Form>
    );
}

function RenderUsers ({userDetails}) {
    return (
        <div>
            {
                userDetails.map(user => <User userDetails={user} />)
            }
        </div>
    )
}

function User ({userDetails: {name, email, password, tos }}) {
    debugger
    return (
        <div>
            <p>Name: {name}</p>
            <p>Email: {email} </p>
            <p>Password: {password} </p>
            <p>Agreed to TOS: {tos ? 'Yes' : 'No'} </p>
        </div>
    )
}

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
        <div>
            <h2>Add New User</h2>
            <Formik 
                initialValues={initialValues}
                onSubmit={onSubmit}
                render={renderForm}
                validationSchema={validationSchema}
            />
            <h2>User List</h2>
            <RenderUsers userDetails={users} />
        </div>
    );
}

export default UserForm;