import React from 'react';
import { Form, Field, ErrorMessage } from 'formik';

export default function RenderForm (props) {
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
                <label htmlFor='tos'>I agree to the Terms of Service</label>
                <Field type="checkbox" name="tos" checked={props.values.tos} />
                <ErrorMessage name='tos' component='span' />
            </div>
            <button type="submit">
                Submit
            </button>
        </Form>
    );
}