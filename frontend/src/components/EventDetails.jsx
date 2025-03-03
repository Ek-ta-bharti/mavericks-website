// import React from 'react';
// import { useParams } from 'react-router-dom';

// const EventDetails = () => {
//   const { eventId } = useParams(); // Get event ID from URL

//   // Dummy event data
//   const event = {
//     id: eventId,
//     title: `Event ${eventId}`,
//     date: '2024-05-15',
//     description: 'This is a detailed description of the event. It includes all the information about the event, such as agenda, speakers, and more.',
//     participants: 120,
//   };

//   return (
//     <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', padding: '20px' }}>
//       <h1 style={{ fontSize: '32px', color: 'cyan', textShadow: '0 0 10px rgba(0, 255, 255, 0.8)', margin: '0 0 20px 0' }}>
//         {event.title}
//       </h1>
//       <p style={{ fontSize: '18px', color: 'white', margin: '0 0 10px 0' }}>Date: {event.date}</p>
//       <p style={{ fontSize: '18px', color: 'white', margin: '0 0 10px 0' }}>Participants: {event.participants}</p>
//       <p style={{ fontSize: '18px', color: 'white', margin: '0 0 10px 0' }}>{event.description}</p>
//     </div>
//   );
// };

// export default EventDetails;