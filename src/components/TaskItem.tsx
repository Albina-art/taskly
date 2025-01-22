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
      className="py-1 border-t">
      <Box display="flex" alignItems="center">
        <Checkbox className="mr-2" checked={task.completed} onChange={onToggle} />
        <Typography className={task.completed ? 'line-through text-action' : 'text-body'}>
          {task.text}
        </Typography>
      </Box>
      <IconButton onClick={onDelete} className="mr-1">
        <DeleteIcon className="fill-action" />
      </IconButton>
    </Box>
  );
};

export default TaskItem;
