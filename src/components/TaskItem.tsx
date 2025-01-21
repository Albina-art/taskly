import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Checkbox, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Task } from '@/utils/types';

interface TaskItemProps {
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
}

const CircleCheckbox = styled(Checkbox)(({ theme }) => ({
  '& .MuiSvgIcon-root': {
    borderRadius: '50%',
    border: '1px solid #e6e6e6',
    path: {
      display: 'none',
    },
  },
  '&.Mui-checked .MuiSvgIcon-root': {
    borderColor: '#79c0b09e', // Обводка зеленого цвета при выборе
  },
}));

const TaskItem = ({ task, onToggle, onDelete }: TaskItemProps) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" padding="8px">
      <CircleCheckbox checked={task.completed} onChange={onToggle} />
      <Typography style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </Typography>
      <IconButton onClick={onDelete}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default TaskItem;
