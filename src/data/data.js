import * as Yup from 'yup';

const postApi = 'https://reqres.in/api/users';

const initialValues = {
    name: '',
    email: '',
    password: '',
    tos: '',
}

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Name is too short')
        .max(50, 'Name is too long')
        .required('Please provide a name'),
    email: Yup.string()
        .email('Email is invalid')
        .matches(/^(waffles@syrup.com)$/, 'Email is already taken')
        .required('Please provide a valid email address'),
    password: Yup.string()
        .min(5, 'Password is too short')
        .required('Please provide a valid password'),
    tos: Yup.boolean()
        .required('Please agree to the terms of service'),
})

export {initialValues, validationSchema, postApi};