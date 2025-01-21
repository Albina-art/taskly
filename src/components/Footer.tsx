import { Box, Button, Typography } from '@mui/material';

import { TaskFilterValues } from '@/utils/types';

const filterValues = Object.values(TaskFilterValues);

interface FooterProps {
  activeCount: number; // Количество невыполненных задач
  onFilterChange: (filter: TaskFilterValues) => void; // Изменение текущего фильтра
  onClearCompleted: () => void; // Удаление завершенных задач
  currentFilter: TaskFilterValues; // Текущий выбранный фильтр
}

const Footer = ({ activeCount, onFilterChange, onClearCompleted, currentFilter }: FooterProps) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding="16px"
      borderTop="1px solid #e6e6e6"
      className="text-second">
      <Typography>{activeCount} items left</Typography>
      <Box display="flex" gap="8px">
        {filterValues.map((filter) => (
          <Button
            className="text-second p-1"
            key={filter}
            variant={currentFilter === filter ? 'contained' : 'text'}
            onClick={() => onFilterChange(filter)}
            style={{
              textTransform: 'none',
              fontWeight: currentFilter === filter ? 'bold' : 'normal',
            }}>
            {filter}
          </Button>
        ))}
      </Box>
      <Button
        variant="text"
        color="secondary"
        onClick={onClearCompleted}
        style={{ textTransform: 'none' }}>
        Clear completed
      </Button>
    </Box>
  );
};

export default Footer;
