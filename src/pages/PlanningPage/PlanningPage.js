import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import WeekSelected from '../../components/WeekSelected/WeekSelected';
import Prizes from '../../components/Prizes/Prizes';
import SelectedTasksPoints from '../../components/SelectedTasksPoints/SelectedTasksPoints';
import AddTasks from '../../components/AddTasks/AddTasks';
import AddTaskModal from '../../components/AddTaskModal/AddTaskModal';
import Footer from '../../components/Footer/Footer';
import TaskList from '../../components/TaskList/TaskList';
import * as planningOperations from '../../redux/planning/planningOperations';
import { screenWidth, currentWeekRange, nextWeekRange } from '../../utils/var';
import styles from './PlanningPage.module.css';
moment.locale('uk');

class PlanningPage extends Component {
  state = {
    openModal: false
    // planning: [{ taskId: 'dsgdsgdsf32', selectedDays: [{ date: '24-10-2019', thu: true }, '26-10-2019'] }]
  };

  componentDidMount() {
    const { fetchTasks } = this.props;
    fetchTasks();
  }

  handleOpenModal = () => {
    this.setState({ openModal: true });
  };

  handleCloseModal = () => {
    this.setState({ openModal: false });
  };

  handleAddTaskSubmit = data => {
    const { onSubmit } = this.props;
    const newTask = { cardTitle: data.value, imageUrl: 'https://kids-like.goit.co.ua/images/default.jpg' };
    // console.log('newTask', newTask);
    onSubmit(newTask);
    this.setState({ openModal: false });
  };

  render() {
    const { openModal } = this.state;
    const { tasks, allPoints, activeDay } = this.props;
    return (
      <div className={styles.wrapper}>
        <WeekSelected activeDay={activeDay} currentWeekRange={currentWeekRange} nextWeekRange={nextWeekRange} />
        {screenWidth < 768 && (
          <>
            <TaskList tasks={tasks} isPlanning />
            <Prizes />
            <Footer />
          </>
        )}
        <SelectedTasksPoints allPoints={allPoints} />
        <AddTasks openModal={this.handleOpenModal} />
        {screenWidth >= 768 && (
          <>
            <TaskList tasks={tasks} isPlanning />
            <Prizes isPlanning />
            <Footer />
          </>
        )}
        {openModal && <AddTaskModal closeModal={this.handleCloseModal} onSubmit={this.handleAddTaskSubmit} />}
      </div>
    );
  }
}

PlanningPage.propTypes = {
  tasks: PropTypes.array,
  fetchTasks: PropTypes.func,
  allPoints: PropTypes.number,
  activeDay: PropTypes.number,
  onSubmit: PropTypes.func
};

const mapStateToProps = state => ({
  tasks: state.planning.tasks,
  allPoints: state.dashboard.data.totalAmount,
  activeDay: state.dashboard.activeDay
});

const mapDispatchToProps = dispatch => ({
  fetchTasks: () => dispatch(planningOperations.fetchTasks()),
  onSubmit: task => dispatch(planningOperations.addCustomTask(task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanningPage);
