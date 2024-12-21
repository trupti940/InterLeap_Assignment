
import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import useLocalStorage from './hooks/useLocalStorage';
import TaskInput from './components/TaskInput';
import TaskColumn from './components/TaskColumn';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', [
    { id: 'task-1', title: 'Set up project structure', status: 'To Do' },
    { id: 'task-2', title: 'Design Kanban layout', status: 'In Progress'},
    {  id: 'task-3', title: 'Implement drag-and-drop', status: 'In Progress' },
    {id: 'task-4', title: 'Test functionality', status: 'Done'}
  ]); 

  const addTask = (title) => {
    setTasks([
      ...tasks,
      { id: crypto.randomUUID(), title, status: 'To Do' },
    ]);
  };

  const moveTask = (taskId, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  console.log('Tasks:', tasks); 

  return (
    <DndProvider backend={HTML5Backend}>
      <h1>Kanban Board</h1>
      <div className="app">
        <TaskInput onAddTask={addTask} />
        <div className="columns">
          {['To Do', 'In Progress', 'Done'].map((status) => (
            <TaskColumn
              key={status}
              title={status}
              tasks={tasks.filter((task) => task.status === status)}
              onMoveTask={moveTask}
              onDeleteTask={deleteTask}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default App;
