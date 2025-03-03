import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:3002/api/events');
        setEvents(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch events:', err);
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3002/api/events/${id}`);
      setEvents(events.filter((event) => event._id !== id));
      alert('Event deleted successfully!');
    } catch (err) {
      console.error('Failed to delete event:', err);
      alert('Failed to delete event. Please try again.');
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-event/${id}`);
  };

  if (loading) {
    return <div style={{ backgroundColor: 'black', color: 'white' }}>Loading...</div>;
  }

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', padding: '20px' }}>
      <h1 style={{ fontSize: '32px', color: 'cyan', textShadow: '0 0 10px rgba(0, 255, 255, 0.8)', marginBottom: '20px' }}>
        All Events
      </h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {events.map((event) => (
          <div
            key={event._id}
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              borderRadius: '10px',
              padding: '20px',
              border: '1px solid cyan',
            }}
          >
            <h2 style={{ fontSize: '24px', color: 'cyan' }}>{event.eventName}</h2>
            <p>Start Date: {event.startDate}</p>
            <p>End Date: {event.endDate}</p>
            <p>Prize: {event.prize}</p>
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <button
                onClick={() => handleEdit(event._id)}
                style={{
                  padding: '10px 20px',
                  backgroundColor: 'cyan',
                  color: 'black',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(event._id)}
                style={{
                  padding: '10px 20px',
                  backgroundColor: 'red',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;