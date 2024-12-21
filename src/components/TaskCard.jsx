
import React from 'react';
import { useDrag } from 'react-dnd';

const TaskCard = ({ task, onDeleteTask }) => {
  const [, dragRef] = useDrag({
    type: 'TASK',
    item: { id: task.id },
  });

  return (
    <div ref={dragRef} className="task-card">
      <p>{task.title}</p>
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskCard;
