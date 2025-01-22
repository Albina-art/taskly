import React from 'react';

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

const DEFAULT_TASKS: Task[] = [
  { id: '1', text: 'Тестовое задание', completed: false },
  { id: '2', text: 'Прекрасный код', completed: true },
  { id: '3', text: 'Покрытие тестами', completed: false },
];

const HomePage = () => {
  const [tasks, setTasks] = React.useState<Task[]>(DEFAULT_TASKS);
  const [filter, setFilter] = React.useState<TaskFilterValues>(TaskFilterValues.all);

  const activeTaskCount = React.useMemo(() => {
    return tasks.filter((task) => !task.completed).length;
  }, [tasks]);

  const handleAddTask = React.useCallback(
    (text: string) => {
      const newTask: Task = {
        id: Date.now().toString(),
        completed: false,
        text,
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
    <div className={`w-full flex items-center justify-center min-h-screen bg-default`}>
      <div className="w-full">
        <h1 className="font-helvetica-neue text-primary text-center text-8xl">todos</h1>
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
      </div>
    </div>
  );
};

export default HomePage;
