import React from 'react';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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
    [setTaskText, onAddTask, taskText],
  );

  return (
    <TextField
      className="bg-input py-1"
      fullWidth
      placeholder="What needs to be done?"
      value={taskText}
      onChange={(e) => setTaskText(e.target.value.trim())}
      variant="standard"
      onKeyDown={handleKeyDown}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start" className="p-2 m-0">
              <KeyboardArrowDownIcon className="fill-action" />
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default TaskInput;
