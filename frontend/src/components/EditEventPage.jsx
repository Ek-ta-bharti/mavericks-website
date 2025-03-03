// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';

// const EditEventPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [event, setEvent] = useState({
//     eventName: '',
//     startDate: '',
//     endDate: '',
//     photo: null,
//     gif: null,
//     description: '',
//     rules: '',
//     eligibility: '',
//     prize: '',
//   });

//   // Fetch the event details
//   useEffect(() => {
//     const fetchEvent = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3002/api/events/${id}`);
//         setEvent(response.data);
//       } catch (err) {
//         console.error('Failed to fetch event:', err);
//       }
//     };
//     fetchEvent();
//   }, [id]);

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append('eventName', event.eventName);
//       formData.append('startDate', event.startDate);
//       formData.append('endDate', event.endDate);
//       formData.append('photo', event.photo);
//       formData.append('gif', event.gif);
//       formData.append('description', event.description);
//       formData.append('rules', event.rules);
//       formData.append('eligibility', event.eligibility);
//       formData.append('prize', event.prize);

//       await axios.put(`http://localhost:3002/api/events/${id}`, formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       alert('Event updated successfully!');
//       navigate('/events');
//     } catch (err) {
//       console.error('Failed to update event:', err);
//       alert('Failed to update event. Please try again.');
//     }
//   };

//   return (
//     <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', padding: '20px' }}>
//       <h1 style={{ fontSize: '32px', color: 'cyan', textShadow: '0 0 10px rgba(0, 255, 255, 0.8)', marginBottom: '20px' }}>
//         Edit Event
//       </h1>
//       <form onSubmit={handleSubmit}>
//         {/* Add form fields similar to AdminDashboard */}
//         <button type="submit">Save Changes</button>
//       </form>
//     </div>
//   );
// };

// export default EditEventPage;