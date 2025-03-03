import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin16' && password === 'ADMIN06') {
      navigate('/admin'); // Redirect to admin dashboard
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', padding: '40px', borderRadius: '15px', textAlign: 'center', boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)', border: '1px solid rgba(0, 255, 255, 0.3)' }}>
        <h2 style={{ fontSize: '24px', color: 'cyan', marginBottom: '20px' }}>Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
            outline: 'none',
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
            outline: 'none',
          }}
        />
        {error && <p style={{ color: 'red', fontSize: '14px', margin: '10px 0' }}>{error}</p>}
        <button
          onClick={handleLogin}
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
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;


// id admin16 or password ADMIN06 