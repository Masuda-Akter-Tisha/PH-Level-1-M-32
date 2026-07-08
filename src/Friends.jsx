import { use } from 'react';
import Friend from './Friend';
import './App.css';
export default function Friends ({friendsPromise}) {
    const friends = use (friendsPromise);
    console.log(friends);
    
    return (
        <div className="card">
            {
            friends.map (friend => <Friend  key = {friend.id}  friend= {friend}></Friend>)
            }
        </div>
    )
}