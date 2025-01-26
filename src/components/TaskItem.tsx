import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Checkbox, IconButton, Typography } from '@mui/material';

import { getTestId, renderTestId } from '@/utils/testId';
import { Task } from '@/utils/types';

interface TaskItemProps {
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
}

const TASK_ITEM_TEST_IDS = {
  CONTAINER: getTestId('TASK_ITEM'),
  TEXT: getTestId('TASK_ITEM_TEXT'),
  CHECKBOX: getTestId('TASK_ITEM_CHECKBOX'),
};

const TaskItem = ({ task, onToggle, onDelete }: TaskItemProps) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      sx={{ py: 1, borderTop: '1px solid var(--action-color)' }}
      {...renderTestId(TASK_ITEM_TEST_IDS.CONTAINER)}>
      <Box display="flex" alignItems="center">
        <Checkbox
          sx={{ mr: 2 }}
          checked={task.completed}
          onChange={onToggle}
          {...renderTestId(TASK_ITEM_TEST_IDS.CHECKBOX)}
        />
        <Typography
          sx={{
            textDecoration: task.completed ? 'line-through' : 'initial',
            color: task.completed ? 'var(--action-color)' : 'var(--body-color)',
          }}
          {...renderTestId(TASK_ITEM_TEST_IDS.TEXT)}>
          {task.text}
        </Typography>
      </Box>
      <IconButton onClick={onDelete} sx={{ mr: 1, p: 0.5, color: 'var(--action-color)' }}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export { TASK_ITEM_TEST_IDS };

export default TaskItem;
