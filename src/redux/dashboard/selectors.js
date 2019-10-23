export const getDay = state => getDayTasks(state);
export const tasks = state => state.dashboard.data;

const getDayTasks = state => {
  if (state.dashboard.data) {
    const tasks = state.dashboard.data.find(task => task.day === state.dashboard.activeDay);
    if (!tasks) {
      return null;
    }
    const { dayTasks } = tasks;
    if (dayTasks) {
      return dayTasks;
    }
    return null;
  }
  if (!state.dashboard.data) return null;
};

export default {
  getDay,
  tasks
};
