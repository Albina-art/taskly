import React from 'react';

import { KeyboardArrowDown } from '@mui/icons-material';
import { Box, Button, InputAdornment, TextField } from '@mui/material';

interface TaskInputProps {
  onAddTask: (text: string) => void;
}

const TaskInput = ({ onAddTask }: TaskInputProps) => {
  const [taskText, setTaskText] = React.useState('');

  const isValidText = React.useMemo(() => taskText.length > 3, [taskText.length]);

  const handleAdd = React.useCallback(() => {
    if (isValidText) {
      onAddTask(taskText);
      setTaskText('');
    }
  }, [isValidText, onAddTask, taskText]);

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = React.useCallback(
    (event) => {
      if (event.key === 'Enter') {
        handleAdd();
      }
    },
    [handleAdd],
  );

  return (
    <Box display="flex">
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
      <Button
        onClick={handleAdd}
        sx={{
          paddingX: 2,
          color: isValidText ? 'var(--secondary-color)' : 'var(--action-color)',
        }}>
        Add
      </Button>
    </Box>
  );
};

export default TaskInput;
