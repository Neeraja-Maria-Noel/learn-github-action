// export const Task_Status = {
//   OPEN: 'OPEN',
//   IN_PROGRESS: 'IN PROGRESS',
//   DONE: 'DONE',
// } as const;

//
export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN PROGRESS',
  DONE = 'DONE',
}
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
