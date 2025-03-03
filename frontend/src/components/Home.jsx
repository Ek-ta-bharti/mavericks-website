import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskCard from './TaskCard';
import ThreeDBackground from './ThreeDBackground'; // Import the ThreeDBackground component

function HomePage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('/admin/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      {/* Render the 3D Background */}
      <ThreeDBackground />

      {/* Content on top of the background */}
      <div style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        zIndex: 1, 
        textAlign: 'center', 
        color: 'white', 
        width: '100%' 
      }}>
        {/* Heading */}
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '10px', color: 'cyan' }}>
          Welcome to Mavericks Program
        </h1>
        <p style={{ fontSize: '24px', color: 'rgba(255, 255, 255, 0.8)' }}>
          Powered by Blackbox.ai
        </p>

        {/* Task Cards */}
        <div style={{ 
          display: 'flex', 
          overflowX: 'scroll', 
          marginTop: '40px', 
          padding: '20px', 
          justifyContent: 'center' 
        }}>
          {tasks.map(task => (
            <TaskCard key={task._id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;