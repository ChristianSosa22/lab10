import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
//mui material son componentes ya hechos por esta libreria que facilita la implementacion de ciertos componentes

const TaskInputForm = ({ addTask }) => {
  const [taskInput, setTaskInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskInput.trim()) return;
    addTask(taskInput);
    setTaskInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={9}>
          <TextField
            label="Enter Task"
            variant="outlined"
            fullWidth
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <Button type="submit" variant="contained" color="primary">
            Add Task
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TaskInputForm;
