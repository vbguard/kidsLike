import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WeekRange from '../WeekRange/WeekRange';
import CurrentDayTitle from '../CurrentDayTitle/CurrentDayTitle';
import ProgressBar from '../ProgressBar/ProgressBar';
import Prizes from '../Prizes/Prizes';
import Footer from '../Footer/Footer';
import TaskList from '../TaskList/TaskList';
import { screenWidth } from '../../utils/var';
// import getDayTasks from '../../redux/dashboard/selectors';

import styles from './DashboardConteiner.module.css';

const DashboardConteiner = ({ tasks }) => (
  <div className={styles.conteiner}>
    <WeekRange />
    <CurrentDayTitle />
    {screenWidth >= 768 && <ProgressBar />}
    {tasks && <TaskList tasks={tasks} />}
    {screenWidth < 1280 && (
      <>
        <Prizes />
        <Footer />
      </>
    )}
    {screenWidth >= 1280 && <Footer />}
  </div>
);

DashboardConteiner.propTypes = {
  // showingTasks: PropTypes.arrayOf().isRequired,
  tasks: PropTypes.oneOfType([PropTypes.shape(), null])
};

const mapStateToProps = state => ({
  showingTasks: state.dashboard.showingTasks,
  tasks: state.dashboard.showingTasks,
  activeDay: state.dashboard.activeDay
});

export default connect(
  mapStateToProps,
  null
)(DashboardConteiner);
