import React, { useEffect, useState } from "react";
import Map from "./Map"; 
import "../index.css";

const ProfileDescription = ({ profile }) => {
  const [address, setAddress] = useState(profile.address);

  useEffect(() => {
    setAddress(profile.address);
  }, [profile]);

  return (
    <div className="profileDes">
      <img src={profile.img} alt="Profile" />
      <div className="sum">
      <h1>{profile.name}</h1>
      <p>{profile.summary}</p>
      <p style={{ cursor: "pointer", color: "blue" }}>{profile.address}</p>
      </div>
      <Map address={profile.address} />
    </div>
  );
};

export default ProfileDescription;
