import React from 'react';
import UserItem from './UserItem';
import { Loading } from '../layouts/Loading';

function Users({users, loading}) {
        if(loading) return <Loading />
        else{ return (
            <div style={userstyle}>
                {users.map(user =>(
                    <UserItem key={user.id} user={user}></UserItem>
                ))}
            </div>
        )}
 
}

const userstyle={
    display: 'grid',
    gridTemplateColumns:'repeat(3, 1fr)',
    gridGap:'1rem'
}

export default Users
