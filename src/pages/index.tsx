import { Geist, Geist_Mono } from 'next/font/google';

import { useState } from 'react';

import Card from '@/components/Card';
import Footer from '@/components/Footer';
import { TaskFilterValues } from '@/utils/types';

import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});
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
  const [tasks, setTasks] = useState<Task[]>(DEFAULT_TASKS);
  const [filter, setFilter] = useState<TaskFilterValues>(TaskFilterValues.all);

  const handleAddTask = (text: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      completed: false,
      text,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

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
    <div
      className={`${geistSans.variable} ${geistMono.variable}  
      font-[family-name:var(--font-geist-sans)]
      flex items-center justify-center min-h-screen`}>
      <div className="max-w-2xl w-full p-4 bg-soft-pink rounded-lg shadow-md">
        <h1>todos</h1>
        <Card>
          <TaskInput onAddTask={handleAddTask} />
          <TaskList
            tasks={filteredTasks}
            onToggleTask={handleToggleTask}
            onDeleteTask={handleDeleteTask}
          />
          <Footer
            activeCount={tasks.filter((task) => !task.completed).length}
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
