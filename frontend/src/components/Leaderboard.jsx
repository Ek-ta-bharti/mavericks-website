import React, { useEffect, useState } from 'react';
import api from '../api';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await api.get('/leaderboard');
        setLeaderboard(response.data);
      } catch (err) {
        console.error('Failed to fetch leaderboard');
      }
    };
    fetchLeaderboard();
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaderboard.map((student, index) => (
          <li key={student._id}>
            {index + 1}. {student.name} - {student.points} points
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;