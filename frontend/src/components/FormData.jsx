// const handleAddEvent = async () => {
//     const formData = new FormData();
//     formData.append('eventName', eventName);
//     formData.append('startDate', startDate);
//     formData.append('endDate', endDate);
//     formData.append('photo', photo); // Assuming `photo` is a File object
//     formData.append('gif', gif); // Assuming `gif` is a File object
//     formData.append('description', description);
//     formData.append('rules', rules);
//     formData.append('eligibility', eligibility);
//     formData.append('prize', prize);
  
//     try {
//       const response = await axios.post('http://localhost:6040/api/events', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log('Event Added:', response.data);
//       alert('Event added successfully!');
  
//       // Clear the form
//       setEventName('');
//       setStartDate('');
//       setEndDate('');
//       setPhoto(null);
//       setGif(null);
//       setDescription('');
//       setRules('');
//       setEligibility('');
//       setPrize('');
//     } catch (err) {
//       console.error('Failed to add event:', err.response ? err.response.data : err.message);
//       alert('Failed to add event. Please try again.');
//     }
//   };
  