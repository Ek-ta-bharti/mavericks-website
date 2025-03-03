import React from 'react';

function TaskCard({ task }) {
  return (
    <div style={{ margin: '10px', padding: '10px', border: '1px solid white', borderRadius: '10px' }}>
      <img src={task.taskPhoto} alt={task.taskName} style={{ width: '100px', height: '100px' }} />
      <h3>{task.taskName}</h3>
      <p>{task.taskDescription}</p>
      <p>Points: {task.taskPoints}</p>
    </div>
  );
}

export default TaskCard;