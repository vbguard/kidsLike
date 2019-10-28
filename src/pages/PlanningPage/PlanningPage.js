/* eslint-disable guard-for-in */
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
import notyf from '../../helpers/notyf';
import api from '../../utils/api';
import styles from './PlanningPage.module.css';
moment.locale('uk');

class PlanningPage extends Component {
  state = {
    openModal: false,
    planning: []
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
    onSubmit(newTask);
    this.setState({ openModal: false });
  };

  handleAddSelectedDays = data => {
    // TODO
    //! { taskId: 'dsgdsgdsf32', selectedDays: [{ date: '24-10-2019', thu: true }, '26-10-2019'] }
    // const dateStartWeek = moment().startOf('week');
    const dayDate = {
      mon: moment()
        .startOf('week')
        .format('DD-MM-YYYY'),
      tue: moment()
        .startOf('week')
        .add(1, 'd')
        .format('DD-MM-YYYY'),
      wed: moment()
        .startOf('week')
        .add(2, 'd')
        .format('DD-MM-YYYY'),
      thu: moment()
        .startOf('week')
        .add(3, 'd')
        .format('DD-MM-YYYY'),
      fri: moment()
        .startOf('week')
        .add(4, 'd')
        .format('DD-MM-YYYY'),
      sat: moment()
        .startOf('week')
        .add(5, 'd')
        .format('DD-MM-YYYY'),
      sun: moment()
        .startOf('week')
        .add(6, 'd')
        .format('DD-MM-YYYY')
    };

    const planningDay = [];

    // eslint-disable-next-line guard-for-in
    // eslint-disable-next-line no-restricted-syntax
    for (const day in data.daySelected) {
      planningDay.push({
        date: dayDate[day],
        [day]: data.daySelected[day]
      });
    }

    this.setState(prevState => {
      const { planning } = prevState;
      planning.push({ taskId: data.taskId, selectedDays: planningDay });
      const state = { ...prevState, planning };
      return state;
    });
  };

  handleSubmitPlanningWeek = e => {
    e.preventDefault();
    const { planning } = this.state;

    const data = {
      tasks: planning.map(day => {
        const { taskId, selectedDays } = day;

        const refactoredSelectedDays = selectedDays
          .filter(day => {
            const keys = Object.keys(day);
            if (day[keys[1]]);
            return day[keys[1]];
          })
          .map(el => el.date);

        return { taskId, selectedDays: refactoredSelectedDays };
      })
    };

    api
      .fetchCreatePlanningWeek(data)
      .then(res => {
        if (res.status === 200) {
          notyf.createPlanningWeek();
          console.log('res.data', res.data);
          this.props.history.push('/dashboard');
        }
      })
      .catch(err => {
        notyf.errorNotyf(err.response);
        console.log('err', err);
      });
  };

  render() {
    const { openModal, planning } = this.state;
    const { tasks, allPoints, activeDay } = this.props;

    return (
      <div className={styles.wrapper}>
        <WeekSelected activeDay={activeDay} currentWeekRange={currentWeekRange} nextWeekRange={nextWeekRange} />
        {screenWidth < 768 && (
          <>
            {planning.length !== 0 && (
              <button type="button" className={styles.btn} onClick={this.handleSubmitPlanningWeek}>
                Запланувати
              </button>
            )}

            <TaskList tasks={tasks} isPlanning planning={planning} checkedDays={this.handleAddSelectedDays} />
            <Prizes />
            <Footer />
          </>
        )}
        <SelectedTasksPoints allPoints={allPoints} />
        <AddTasks openModal={this.handleOpenModal} />
        {screenWidth >= 768 && (
          <>
            {planning.length !== 0 && (
              <button type="button" className={styles.btn} onClick={this.handleSubmitPlanningWeek}>
                Запланувати
              </button>
            )}
            <TaskList tasks={tasks} isPlanning planning={planning} checkedDays={this.handleAddSelectedDays} />
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
  onSubmit: PropTypes.func,
  history: PropTypes.shape()
};

PlanningPage.defaultProps = {
  allPoints: 0
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
