import React from 'react';

import { KeyboardArrowDown } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';

interface TaskInputProps {
  onAddTask: (text: string) => void;
}

const TaskInput = ({ onAddTask }: TaskInputProps) => {
  const [taskText, setTaskText] = React.useState('');

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = React.useCallback(
    (event) => {
      if (event.key === 'Enter' && taskText) {
        onAddTask(taskText);
        setTaskText('');
      }
    },
    [taskText, onAddTask],
  );

  return (
    <TextField
      fullWidth
      placeholder="What needs to be done?"
      value={taskText}
      onChange={(e) => setTaskText(e.target.value.trim())}
      variant="standard"
      onKeyDown={handleKeyDown}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <KeyboardArrowDown sx={{ color: 'var(--action-color)' }} />
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default TaskInput;
