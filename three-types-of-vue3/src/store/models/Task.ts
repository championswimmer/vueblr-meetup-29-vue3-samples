export interface Task {
  id: string;
  name: string;
  done: boolean;
  priority: number;
}

export function createTask(name: string, done?: boolean, priority?: number) {
  return {
    id: Math.random()
      .toString(36)
      .substring(7),
    name,
    done: done || false,
    priority: priority || 0
  } as Task;
}
