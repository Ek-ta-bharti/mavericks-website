import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [eventName, setEventName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [photo, setPhoto] = useState(null);
  const [gif, setGif] = useState(null);
  const [description, setDescription] = useState('');
  const [rules, setRules] = useState('');
  const [eligibility, setEligibility] = useState('');
  const [prize, setPrize] = useState('');

  const handlePhotoUpload = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleGifUpload = (e) => {
    setGif(e.target.files[0]);
  };

  const handleAddEvent = async () => {
    const formData = new FormData();
    formData.append('eventName', eventName);
    formData.append('startDate', startDate);
    formData.append('endDate', endDate);
    formData.append('photo', photo);
    formData.append('gif', gif);
    formData.append('description', description);
    formData.append('rules', rules);
    formData.append('eligibility', eligibility);
    formData.append('prize', prize);

    try {
      const response = await axios.post('http://localhost:3002/api/events', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Event added successfully!');
      console.log('Event Added:', response.data);
    } catch (err) {
      console.error('Failed to add event:', err);
      alert('Failed to add event. Please try again.');
    }
  };

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', padding: '20px' }}>
      <h1 style={{ fontSize: '32px', color: 'cyan', textShadow: '0 0 10px rgba(0, 255, 255, 0.8)', marginBottom: '20px' }}>
        Admin Dashboard
      </h1>
      <button
        onClick={() => navigate('/events')}
        style={{
          padding: '10px 20px',
          backgroundColor: 'cyan',
          color: 'black',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '20px',
        }}
      >
        View All Events
      </button>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '24px', color: 'cyan', marginBottom: '20px' }}>Add Event</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input
            type="text"
            placeholder="Event Name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            style={{
              padding: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid cyan',
              borderRadius: '5px',
              color: 'white',
              outline: 'none',
            }}
          />
          <input
            type="date"
            placeholder="Start Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            style={{
              padding: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid cyan',
              borderRadius: '5px',
              color: 'white',
              outline: 'none',
            }}
          />
          <input
            type="date"
            placeholder="End Date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            style={{
              padding: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid cyan',
              borderRadius: '5px',
              color: 'white',
              outline: 'none',
            }}
          />
          <div>
            <label style={{ fontSize: '16px', color: 'cyan', marginBottom: '10px', display: 'block' }}>
              Upload Photo:
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              style={{
                padding: '10px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid cyan',
                borderRadius: '5px',
                color: 'white',
                outline: 'none',
              }}
            />
          </div>
          <div>
            <label style={{ fontSize: '16px', color: 'cyan', marginBottom: '10px', display: 'block' }}>
              Upload GIF:
            </label>
            <input
              type="file"
              accept="image/gif"
              onChange={handleGifUpload}
              style={{
                padding: '10px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid cyan',
                borderRadius: '5px',
                color: 'white',
                outline: 'none',
              }}
            />
          </div>
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{
              padding: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid cyan',
              borderRadius: '5px',
              color: 'white',
              outline: 'none',
              minHeight: '100px',
            }}
          />
          <textarea
            placeholder="Rules"
            value={rules}
            onChange={(e) => setRules(e.target.value)}
            style={{
              padding: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid cyan',
              borderRadius: '5px',
              color: 'white',
              outline: 'none',
              minHeight: '100px',
            }}
          />
          <textarea
            placeholder="Eligibility"
            value={eligibility}
            onChange={(e) => setEligibility(e.target.value)}
            style={{
              padding: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid cyan',
              borderRadius: '5px',
              color: 'white',
              outline: 'none',
              minHeight: '100px',
            }}
          />
          <input
            type="text"
            placeholder="Prize"
            value={prize}
            onChange={(e) => setPrize(e.target.value)}
            style={{
              padding: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid cyan',
              borderRadius: '5px',
              color: 'white',
              outline: 'none',
            }}
          />
          <button
            onClick={handleAddEvent}
            style={{
              padding: '10px 20px',
              backgroundColor: 'cyan',
              color: 'black',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(0, 255, 255, 0.8)'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'cyan'}
          >
            Add Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;