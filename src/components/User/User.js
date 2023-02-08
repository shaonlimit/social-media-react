import React, { useEffect, useState } from 'react';
import Profile from '../Profile/Profile';
import './User.css';

const User = () => {
    const [user,setUser] = useState([]);
    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=15')
        .then(res=>res.json())
        .then(data=>setUser(data.results))
    },[])

    const [addedFriend, setAddedFriend] = useState([]);
    const addedFriendHandler =(profile)=> {
       const totalFriend = [...addedFriend, profile];
       setAddedFriend(totalFriend);
    }
  
    return (
        <div className='user-ui'>
            <div className="profile">
              {
                user.map(user=><Profile user={user} key={user.phone} addedFriendHandler={addedFriendHandler}></Profile>)
              }
            </div>
            <div className="count">
                <h4>Total Friend: {user.length}</h4>
                <h5>Added Friend:{addedFriend.length}</h5>
            </div>
            
        </div>
    );
};

export default User;