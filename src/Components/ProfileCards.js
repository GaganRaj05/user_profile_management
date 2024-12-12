import React from 'react';
import "../index.css";

const ProfileCards = ({ profiles, onProfileClick }) => {
  return (
    <div className="cards-display">
        <h1>Users</h1>
      <div className='rowDisplay' >
      {profiles.map((profile, index) => (
        <div
          key={index}
          className="card"
          style={{ width: "18rem" }}
          onClick={() => onProfileClick(profile)}
        >
          <img src={profile.img} className="card-img-top" alt={profile.name} style={{width:"290px"}} />
          <div className="card-body">
            <h5 className="card-title">{profile.name}</h5>
            <button className="btn btn-dark">Get a detailed view</button>
          </div>
        </div>
      ))}
      </div>
      <hr></hr>
    </div>
  );
};

export default ProfileCards;
