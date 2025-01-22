export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

/* eslint-disable no-unused-vars*/
export enum TaskFilterValues {
  all = 'All',
  active = 'Active',
  completed = 'Completed',
}
