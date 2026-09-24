import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TaskService {
  private task: Task[] = [];

  getAllTasks(): Task[] {
    return this.task;
  }

  getTaskById(id: string): Task {
    const task = this.task.find((task) => task.id === id);
    if (!task) {
      throw new Error('Task not found');
    }
    return task;
  }

  createTask(title: string, description: string): Task {
    const newTask = {
      id: uuidv4(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.task.push(newTask);
    return newTask;
  }

  deleteTask(id: string): void {
    const found = this.getTaskById(id);
    this.task = this.task.filter((task) => task.id !== found.id);
  }

  updateTaskStatus(id: string, status: TaskStatus): Task {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }
}
