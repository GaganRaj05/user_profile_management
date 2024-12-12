import React, { useState } from 'react';
import { useProfiles } from './ProfileProvider';
import "../index.css";

export default function MainCont({ selected }) {
  const { profiles, addProfile, deleteProfile } = useProfiles();
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    summary: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!file || !formData.name || !formData.address || !formData.summary) {
      alert("All fields are required!");
      return;
    }

    const newProfile = {
      ...formData,
      img: URL.createObjectURL(file),
    };
    
    addProfile(newProfile);

    setFile(null);
    setFormData({
      name: '',
      address: '',
      summary: ''
    });
  };

  let content;

  if (selected === "create") {
    content = (
      <div className="container">
        <div className="title">Registration</div>
        <div className="content">
          <form onSubmit={handleSubmit}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="input-box">
                <span className="details">Address</span>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter user Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="input-box">
                <span className="details">Summary</span>
                <textarea
                  name="summary"
                  placeholder="Enter user description"
                  value={formData.summary}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="input-box">
                <span className="details">Profile Picture</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                />
              </div>
            </div>

            <div className="button">
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    content = (
      <div className="cards-display">
        <h1>Users</h1>
        <div className="rowDisplay">
          {profiles.map((profile, index) => (
            <div key={index} className="card" style={{ width: "18rem" }}>
              <img src={profile.img} className="card-img-top" alt={profile.name} />
              <div className="card-body">
                <h5 className="card-title">{profile.name}</h5>
                <button className="btn btn-danger" onClick={() => deleteProfile(profile.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
}
