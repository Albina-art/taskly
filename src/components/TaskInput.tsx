import React from 'react';

import { Box, Button, TextField } from '@mui/material';

interface TaskInputProps {
  onAddTask: (text: string) => void;
}

const TaskInput = ({ onAddTask }: TaskInputProps) => {
  const [taskText, setTaskText] = React.useState('');

  const handleAddTask = () => {
    if (taskText.trim()) {
      onAddTask(taskText);
      setTaskText('');
    }
  };

  return (
    <Box display="flex" alignItems="center" gap="8px" padding="16px">
      <TextField
        fullWidth
        placeholder="What needs to be done?"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value.trim())}
      />
      {taskText.length > 3 && (
        <Button variant="contained" onClick={handleAddTask}>
          Add
        </Button>
      )}
    </Box>
  );
};

export default TaskInput;
