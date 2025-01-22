import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Checkbox, IconButton, Typography } from '@mui/material';

import { Task } from '@/utils/types';

interface TaskItemProps {
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
}

const TaskItem = ({ task, onToggle, onDelete }: TaskItemProps) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      sx={{ py: 1, borderTop: '1px solid var(--action-color)' }}>
      <Box display="flex" alignItems="center">
        <Checkbox sx={{ mr: 2 }} checked={task.completed} onChange={onToggle} />
        <Typography
          sx={{
            textDecoration: task.completed ? 'line-through' : 'initial',
            color: task.completed ? 'var(--action-color)' : 'var(--body-color)',
          }}>
          {task.text}
        </Typography>
      </Box>
      <IconButton onClick={onDelete} sx={{ mr: 1, p: 0.5, color: 'var(--action-color)' }}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default TaskItem;
