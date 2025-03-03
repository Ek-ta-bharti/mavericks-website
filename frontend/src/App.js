import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard'; // Import AdminDashboard (only once)
import AdminLogin from './components/AdminLogin'; // Import AdminLogin (only once)
import EditEventPage from './components/EditEventPage';
import EventDetails from './components/EventDetails'; // Import EventDetails
import EventsPage from './components/EventsPage';
import Home from './components/Home'; // Import Home
import Leaderboard from './components/Leaderboard';
import Login from './components/Login'
import Register from './components/Register';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/edit-event/:id" element={<EditEventPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/event/:eventId" element={<EventDetails />} />
        <Route path="/home" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />

      </Routes>
    </Router>
  );
};

export default App;