import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import api from '../api';
import ThreeDBackground from './ThreeDBackground'; // Import the ThreeDBackground component

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await api.post('/register', { name, email, password }); 
      alert('Registration successful');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <div style={{ 
      position: 'relative', // Ensure the Register form is positioned relative to the background
      width: '100%', 
      height: '100vh', 
      overflow: 'hidden' 
    }}>
      {/* Render the 3D Background */}
      <ThreeDBackground />

      {/* Register Form */}
      <div style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        zIndex: 1, 
        backgroundColor: 'rgba(0, 0, 0, 0.8)', 
        padding: '40px', 
        borderRadius: '15px', 
        color: 'white', 
        textAlign: 'center', 
        boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)', 
        border: '1px solid rgba(0, 255, 255, 0.3)' 
      }}>
        <h2 style={{ marginBottom: '20px', fontSize: '24px', color: 'cyan' }}>Register</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ 
            display: 'block', 
            margin: '10px auto', 
            padding: '10px', 
            width: '100%', 
            maxWidth: '300px', 
            backgroundColor: 'rgba(255, 255, 255, 0.1)', 
            border: '1px solid cyan', 
            borderRadius: '5px', 
            color: 'white', 
            outline: 'none' 
          }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ 
            display: 'block', 
            margin: '10px auto', 
            padding: '10px', 
            width: '100%', 
            maxWidth: '300px', 
            backgroundColor: 'rgba(255, 255, 255, 0.1)', 
            border: '1px solid cyan', 
            borderRadius: '5px', 
            color: 'white', 
            outline: 'none' 
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ 
            display: 'block', 
            margin: '10px auto', 
            padding: '10px', 
            width: '100%', 
            maxWidth: '300px', 
            backgroundColor: 'rgba(255, 255, 255, 0.1)', 
            border: '1px solid cyan', 
            borderRadius: '5px', 
            color: 'white', 
            outline: 'none' 
          }}
        />
        <button
          onClick={handleRegister}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: 'cyan', 
            color: 'black', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer', 
            marginTop: '20px', 
            fontSize: '16px', 
            fontWeight: 'bold', 
            boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)', 
            transition: 'background-color 0.3s ease' 
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(0, 255, 255, 0.8)'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'cyan'}
        >
          Register
        </button>

        {/* Login Option */}
        <p style={{ marginTop: '20px', fontSize: '14px', color: 'white' }}>
          Already have an account?{' '}
          <Link 
            to="/login" 
            style={{ 
              color: 'cyan', 
              textDecoration: 'none', 
              fontWeight: 'bold', 
              transition: 'color 0.3s ease' 
            }}
            onMouseOver={(e) => e.target.style.color = 'rgba(0, 255, 255, 0.8)'}
            onMouseOut={(e) => e.target.style.color = 'cyan'}
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;