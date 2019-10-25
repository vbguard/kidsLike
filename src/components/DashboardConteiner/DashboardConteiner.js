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

const options1 = { weekday: 'long' };
const options2 = { year: 'numeric', month: 'long', day: 'numeric' };

const formatDate = (data, options) => {
  const date = new Date(data);
  return date.toLocaleString('uk-Ua', options);
};

const week = (obj, options) => {
  if (obj)
    return Object.values(obj)
      .map(date => formatDate(date, options))
      .join(' - ');
};

const DashboardConteiner = ({ tasks, currentDayTitle, currentDate, weekRange, allPoints, currentPoints }) => (
  <div className={styles.conteiner}>
    <WeekRange weekRange={weekRange} />
    <CurrentDayTitle date={currentDate} dayTitle={currentDayTitle} />
    {screenWidth >= 768 && <ProgressBar currentPoints={currentPoints} allPoints={allPoints} />}
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
  tasks: PropTypes.oneOfType([PropTypes.shape(), null]),
  currentDayTitle: PropTypes.string,
  currentDate: PropTypes.string,
  weekRange: PropTypes.string,
  currentPoints: PropTypes.number,
  allPoints: PropTypes.number
  // activeDay: PropTypes.number
};

const mapStateToProps = state => ({
  tasks: state.dashboard.showingTasks,
  currentDayTitle: formatDate(state.dashboard.data.today, options1),
  currentDate: formatDate(state.dashboard.data.today).substring(0, 10),
  weekRange: week(state.dashboard.data.weekRange, options2),
  currentPoints: state.dashboard.data.totalDone,
  allPoints: state.dashboard.data.totalAmount,
  activeDay: state.dashboard.activeDay
});

export default connect(
  mapStateToProps,
  null
)(DashboardConteiner);
