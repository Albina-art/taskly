import { Box, Button, Typography } from '@mui/material';

import { getTestId, renderTestId } from '@/utils/testId';
import { TaskFilterValues } from '@/utils/types';

const filterValues = Object.values(TaskFilterValues);

interface TaskFooterProps {
  activeCount: number;
  onFilterChange: (filter: TaskFilterValues) => void;
  onClearCompleted: () => void;
  currentFilter: TaskFilterValues;
}

const TASK_FOOTER_TEST_IDS = {
  CLEAR_BUTTON: getTestId('TASK_FOOTER_CLEAR_BUTTON'),
};

const TaskFooter = ({
  activeCount,
  onFilterChange,
  onClearCompleted,
  currentFilter,
}: TaskFooterProps) => {
  return (
    <Box
      sx={{
        borderTop: '1px solid',
        borderColor: 'var(--action-color)',
        px: 2,
        py: 1,
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Typography variant="body2" sx={{ color: 'var(--body-color)', fontWeight: 100, py: 1 }}>
        {activeCount} items left
      </Typography>
      <Box sx={{ display: 'flex', gap: 1 }}>
        {filterValues.map((filter) => (
          <Button
            key={filter}
            variant={currentFilter === filter ? 'outlined' : 'text'}
            onClick={() => onFilterChange(filter)}
            sx={{
              px: 1,
              py: 0,
              color: 'var(--secondary-color)',
              borderColor: currentFilter === filter ? 'var(--primary-color)' : 'transparent',
            }}>
            {filter}
          </Button>
        ))}
      </Box>
      <Button
        variant="text"
        onClick={onClearCompleted}
        sx={{
          p: 1,
          pr: 0,
          fontSize: '0.875rem',
          color: 'var(--secondary-color)',
        }}
        {...renderTestId(TASK_FOOTER_TEST_IDS.CLEAR_BUTTON)}>
        Clear completed
      </Button>
    </Box>
  );
};

export { TASK_FOOTER_TEST_IDS };

export default TaskFooter;
