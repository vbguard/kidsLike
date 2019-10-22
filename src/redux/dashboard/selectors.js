export const getDay = day => state => state.dashboard.tasks.find(task => task.day === day);
export const tasks = state => state.tasks;

export default {
  getDay,
  tasks
};
