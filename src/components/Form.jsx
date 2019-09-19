import React from 'react';
import { Formik, Form, Field } from 'formik';

const initialValues = {
    name: '',
    email: '',
    password: '',
    tos: '',
}

function onSubmit () {
    return null;
}

function isSubmitting () {
    return false;
}

function renderForm (props) {
    return ( 
        <Form>
            <div>
                <label htmlFor='name'>Name: </label>
                <Field type="text" name="name" />
            </div>
            <div>
                <label htmlFor='email'>Email: </label>
                <Field type="email" name="email" />
            </div>
            <div>
                <label htmlFor='Password'>Password: </label>
                <Field type="password" name="password" />
            </div>
            <div>
                <Field type="checkbox" name="tos" />
                <label htmlFor='tos'>I agree to the Terms of Service</label>
            </div>
            <button type="submit" disabled={isSubmitting}>
                Submit
            </button>
        </Form>
    );
}

function UserForm () {
    return (
        <div>
            <h1>Add New User</h1>
            <Formik 
                initialValues={initialValues}
                onSubmit={onSubmit}
                render={renderForm}
            />
        </div>
    );
}

export default UserForm;