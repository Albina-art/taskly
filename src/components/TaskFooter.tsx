import { Box, Button, Typography } from '@mui/material';

import { TaskFilterValues } from '@/utils/types';

const filterValues = Object.values(TaskFilterValues);

interface TaskFooterProps {
  activeCount: number; // Количество невыполненных задач
  onFilterChange: (filter: TaskFilterValues) => void; // Изменение текущего фильтра
  onClearCompleted: () => void; // Удаление завершенных задач
  currentFilter: TaskFilterValues; // Текущий выбранный фильтр
}

const TaskFooter = ({
  activeCount,
  onFilterChange,
  onClearCompleted,
  currentFilter,
}: TaskFooterProps) => {
  return (
    <Box
      className="border-t border-gray px-4 py-2  xs:flex max-xs:block"
      justifyContent="space-between"
      alignItems="center">
      <Typography className="text-secondary text-sm py-1">{activeCount} items left</Typography>
      <Box display="flex" gap="8px">
        {filterValues.map((filter) => (
          <Button
            className="text-secondary px-2 py-0 max-w-max min-w-5 border-primary normal-case"
            key={filter}
            variant={currentFilter === filter ? 'outlined' : 'text'}
            onClick={() => onFilterChange(filter)}>
            {filter}
          </Button>
        ))}
      </Box>
      <Button
        variant="text"
        className="text-secondary p-1 normal-case text-sm"
        onClick={onClearCompleted}>
        Clear completed
      </Button>
    </Box>
  );
};

export default TaskFooter;
