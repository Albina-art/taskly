export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export enum TaskFilterValues {
  all = 'All',
  active = 'Active',
  completed = 'Completed',
}
