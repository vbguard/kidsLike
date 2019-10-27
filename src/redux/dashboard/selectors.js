export const getAllTasks = state => state.dashboard.data.tasks;

export const getShowingTasks = day => getAllTasks.filter(item => item.day === day).dayTasks;
export const getShowingTasksInit = (state, day) => state.dashboard.data.tasks.filter(item => item.day === day).dayTasks;
export const getDayTasks = state => {
  if (state.dashboard.data.tasks) {
    const tasks = state.dashboard.data.tasks.find(task => task.day === state.dashboard.activeDay);
    if (!tasks) {
      return null;
    }
    const { dayTasks } = tasks;
    if (dayTasks) {
      return dayTasks;
    }
    return null;
  }
  if (!state.dashboard.data.tasks) return null;
};

export default {
  getAllTasks,
  getDayTasks,
  getShowingTasks,
  getShowingTasksInit
};
