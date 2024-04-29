import React from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';

const TaskList = ({ tasks, deleteTask }) => {
  const handleDelete = (index) => {
    deleteTask(index);
  };

  return (
    <List>
      {tasks.map((task, index) => (
        <ListItem key={index}>
          <ListItemText primary={task} />
          <Button
            variant="outlined"
            color="error"
            onClick={() => handleDelete(index)}
          >
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;
