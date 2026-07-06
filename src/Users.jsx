import { use } from 'react';
import './App.css';
export default function Users ({fetchPromise}) {
    const users = use (fetchPromise);
    console.log(users);
    
    return (
        <div className='card'>
        <h3>users : {users.length}</h3> 
        </div>
    )
}