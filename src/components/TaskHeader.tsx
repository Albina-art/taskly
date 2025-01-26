import React from 'react';

import { KeyboardArrowDown } from '@mui/icons-material';
import { Box, Button, InputAdornment, TextField } from '@mui/material';

import { getTestId, renderTestId } from '@/utils/testId';

interface TaskInputProps {
  onAddTask: (text: string) => void;
}

const TASK_HEADER_TEST_IDS = {
  INPUT: getTestId('TASK_HEADER_INPUT'),
  ADD_BUTTON: getTestId('TASK_HEADER_ADD_BUTTON'),
};

const TaskHeader = ({ onAddTask }: TaskInputProps) => {
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
        {...renderTestId(TASK_HEADER_TEST_IDS.INPUT)}
      />
      <Button
        onClick={handleAdd}
        sx={{
          paddingX: 2,
          color: isValidText ? 'var(--secondary-color)' : 'var(--action-color)',
        }}
        {...renderTestId(TASK_HEADER_TEST_IDS.ADD_BUTTON)}>
        Add
      </Button>
    </Box>
  );
};

export { TASK_HEADER_TEST_IDS };
export default TaskHeader;
