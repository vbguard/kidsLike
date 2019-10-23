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
    const { tasks } = this.props;
    return (
      <div className={styles.wrapper}>
        <WeekSelected />
        {screenWidth < 768 && (
          <>
            <TaskList tasks={tasks} isPlanning />
            <Prizes />
            <Footer />
          </>
        )}
        <SelectedTasksPoints />
        <AddTasks />
        {screenWidth >= 768 && (
          <>
            <TaskList tasks={tasks} isPlanning />
            <Prizes />
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
  fetchTasks: PropTypes.func
};

const mapStateToProps = state => ({
  tasks: state.planning.tasks
});

const mapDispatchToProps = {
  fetchTasks: planningOperations.fetchTasks
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanningPage);
