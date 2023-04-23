// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom'; 
import './App.css';
import {AccomsPage, AdminPage, Home, LandlordHome, LandlordProfile, Listing, UserProfile } from './pages';

const App = () => {
  return (
    // <div>Hey</div>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/AccomsPage" element={<div><AccomsPage/></div>} />
      <Route path="/AdminPage" element={<div><AdminPage/></div>} />
      <Route path="/LandlordHome" element={<div><LandlordHome/></div>} />
      <Route path="/LandlordProfile" element={<div><LandlordProfile/></div>} />
      <Route path="/Listing" element={<div><Listing/></div>} />
      <Route path="/UserProfile" element={<div><UserProfile/></div>} />
    
    </Routes>
  )
}

export default App;
