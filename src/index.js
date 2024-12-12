import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import Admin from './Pages/admin';
import { ProfileProvider } from './Components/ProfileProvider'; // Import ProfileProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProfileProvider> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home/" element={<Home />} />
          <Route path="admin/" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </ProfileProvider>
  </React.StrictMode>
);
