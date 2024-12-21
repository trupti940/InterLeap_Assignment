
import React from 'react';
import { useDrop } from 'react-dnd';
import TaskCard from './TaskCard';

const TaskColumn = ({ title, tasks, onMoveTask, onDeleteTask }) => {
  const [, dropRef] = useDrop({
    accept: 'TASK',
    drop: (item) => {
      onMoveTask(item.id, title);
    },
  });

  console.log(`Column "${title}" tasks:`, tasks); 

  return (
    <div ref={dropRef} className="column">
      <h2>{title}</h2>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
};

export default TaskColumn;
