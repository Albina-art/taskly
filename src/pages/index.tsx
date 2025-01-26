import React from 'react';

import { Box, Typography } from '@mui/material';

import Card from '@/components/Card';
import TaskFooter from '@/components/TaskFooter';
import { TaskFilterValues } from '@/utils/types';

import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';

export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

const TASKS_STORAGE_KEY = 'tasks';

const HomePage = () => {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [filter, setFilter] = React.useState<TaskFilterValues>(TaskFilterValues.all);

  React.useEffect(() => {
    const savedTodos = localStorage.getItem(TASKS_STORAGE_KEY);
    if (savedTodos) {
      setTasks(JSON.parse(savedTodos));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const activeTaskCount = React.useMemo(() => {
    return tasks.filter((task) => !task.completed).length;
  }, [tasks]);

  const handleAddTask = React.useCallback(
    (text: string) => {
      const newTask: Task = {
        id: Date.now().toString(),
        completed: false,
        text: text.trim(),
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
    },
    [setTasks],
  );

  const handleToggleTask = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }

        return task;
      }),
    );
  };

  const handleDeleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleClearCompleted = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === TaskFilterValues.active) {
      return !task.completed;
    }

    if (filter === TaskFilterValues.completed) {
      return task.completed;
    }

    return true; // 'All'
  });

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        bgcolor: 'var(--default-color)',
      }}>
      <Box sx={{ width: '100%' }}>
        <Typography
          variant="h1"
          align="center"
          sx={{
            color: 'var(--primary-color)',
            fontSize: '100px',
            lineHeight: '100px',
          }}>
          todos
        </Typography>
        <Card>
          <TaskInput onAddTask={handleAddTask} />
          <TaskList
            tasks={filteredTasks}
            onToggleTask={handleToggleTask}
            onDeleteTask={handleDeleteTask}
          />
          <TaskFooter
            activeCount={activeTaskCount}
            onFilterChange={setFilter}
            onClearCompleted={handleClearCompleted}
            currentFilter={filter}
          />
        </Card>
      </Box>
    </Box>
  );
};

export default HomePage;
