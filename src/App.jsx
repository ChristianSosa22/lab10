import React, { useState } from 'react';
import TaskInput from './TaskInputForm';
import TaskList from './TaskList';
import { Container, Typography, Button } from '@mui/material';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(0);

  const addTask = (task) => {
    setTasks([...tasks, task]);
    setCount(count + 1);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setCount(count - 1);
  };
  const deleteAllTasks = () => {
    setTasks([]);
    setCount(0); // Reset count to 0 when all tasks are deleted
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Mini Task Dashboard
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        Task Counter: {count}
      </Typography>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
      <Button variant="contained" color="primary" onClick={deleteAllTasks}>
        Delete All
      </Button>
    </Container>
  );
};

export default App;
