import React from 'react';

export default function RenderUser ({ userDetails: { name, email, password, role, tos } }) {
    return (
        <div className='user'>
            <p>Name: { name }</p>
            <p>Email: { email } </p>
            <p>Password: { password } </p>
            <p>Role: { role } </p>
            <p>Agreed to TOS: { tos ? 'Yes' : 'No' } </p>
        </div>
    )
}