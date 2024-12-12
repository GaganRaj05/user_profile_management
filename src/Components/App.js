import React, { useState, useEffect } from 'react';
import ProfileCards from './ProfileCards';
import ProfileDescription from './ProfileDescription';
import "../index.css";
import { useProfiles } from './ProfileProvider';


export default function App() {
  const defaultCoords = [78.9629, 20.5937];
  const [selectedProfile, setSelectedProfile] = useState({
    img: "Images/userImg.jpg",
    name: "Welcome to User Profiles",
    address: "Your address will appear here.",
    summary: "Click on a profile card to see details.",
    location: defaultCoords, 
  });

  const [loading, setLoading] = useState(false);
  const { profiles, addProfile, deleteProfile } = useProfiles(); 

  
  const geocodeAddress = async (address) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          address
        )}&format=json`
      );
      const data = await response.json();
      if (data.length > 0) {
        return [parseFloat(data[0].lon), parseFloat(data[0].lat)];
      }
    } catch (error) {
      console.error("Geocoding error:", error);
    } finally {
      setLoading(false);
    }
    return defaultCoords; 
  };

  const handleProfileClick = async (profile) => {
    const coords = await geocodeAddress(profile.address);
    setSelectedProfile({ ...profile, location: coords });
  };

  return (
    <div className="App">
      {loading && <p>Select a profile to load the map </p>}
      <ProfileDescription profile={selectedProfile} />
      <ProfileCards profiles={profiles} onProfileClick={handleProfileClick} />
    </div>
  );
}
