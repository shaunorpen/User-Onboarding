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

function UserForm () {
    return (
        <div>
            <h1>Add New User</h1>
            <Formik 
                initialValues={initialValues}
                onSubmit={onSubmit}
                render={ props => {
                    return ( 
                        <Form>
                            <Field type="text" name="name" />
                            <Field type="email" name="email" />
                            <Field type="password" name="password" />
                            <Field type="checkbox" name="tos" />
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </Form>
                    )
                }}
            />
        </div>
    );
}

export default UserForm;