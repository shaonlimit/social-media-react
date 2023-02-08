import React from 'react';
import './Profile.css';

const Profile = (props) => {
    const {name,picture,gender,location,email,registered,phone} = props.user;
    return (
        <div className='single-profile'>
            <img src={picture.large} alt="" />
            <h4>{name.title} {name.first} {name.last}</h4>
            <p>Gender: {gender}</p>
            <p>Age: {registered.age}</p>
            <p>Country: {location.country}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <button onClick={()=>props.addedFriendHandler(props.user)}>Add Me</button>
        </div>
    );
};

export default Profile;