import React from 'react';
import RenderUser from './RenderUser';

export default function RenderUsers ({userDetails}) {
    return (
        <div>
            {
                userDetails.map(user => <RenderUser userDetails={user} />)
            }
        </div>
    )
}