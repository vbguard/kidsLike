import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WeekSelected from '../../components/WeekSelected/WeekSelected';
import Prizes from '../../components/Prizes/Prizes';
import SelectedTasksPoints from '../../components/SelectedTasksPoints/SelectedTasksPoints';
import AddTasks from '../../components/AddTasks/AddTasks';
import AddTaskModal from '../../components/AddTaskModal/AddTaskModal';
import Footer from '../../components/Footer/Footer';
import TaskList from '../../components/TaskList/TaskList';
import * as planningOperations from '../../redux/planning/planningOperations';
import { screenWidth } from '../../utils/var';
import styles from './PlanningPage.module.css';

const formatDate = (data) => {
  const date = new Date(data);
  return date.toLocaleString('uk-Ua');
};

const week = (obj) => {
  if (obj)
    return Object.values(obj)
      .map(date => formatDate(date))
      .join(' - ');

class PlanningPage extends Component {
  state = {
    openModal: false
  };

  componentDidMount() {
    const { fetchTasks } = this.props;
    fetchTasks();
  }

  handleOpenModal = () => {
    this.setState(state => ({ openModal: !state.openModal }));
  };

  render() {
    const { openModal } = this.state;
    const { tasks, allPoints, weekRange } = this.props;
    return (
      <div className={styles.wrapper}>
        <WeekSelected weekRange={weekRange} />
        {screenWidth < 768 && (
          <>
            <TaskList tasks={tasks} isPlanning />
            <Prizes />
            <Footer />
          </>
        )}
        <SelectedTasksPoints allPoints={allPoints} />
        <AddTasks />
        {screenWidth >= 768 && (
          <>
            <TaskList tasks={tasks} isPlanning />
            <Prizes isPlanning />
            <Footer />
          </>
        )}
        {openModal && <AddTaskModal open={openModal} onChange={this.handleOpenModal} />}
      </div>
    );
  }
}

PlanningPage.propTypes = {
  tasks: PropTypes.array,
  fetchTasks: PropTypes.func,
  allPoints: PropTypes.number,
  weekRange: PropTypes.number
};

const mapStateToProps = state => ({
  tasks: state.planning.tasks,
  allPoints: state.dashboard.data.totalAmount,
  weekRange: week(state.dashboard.data.weekRange)
});

const mapDispatchToProps = {
  fetchTasks: planningOperations.fetchTasks
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanningPage);