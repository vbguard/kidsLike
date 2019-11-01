import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WeekRange from '../WeekRange/WeekRange';
import CurrentDayTitle from '../CurrentDayTitle/CurrentDayTitle';
import ProgressBar from '../ProgressBar/ProgressBar';
import Prizes from '../Prizes/Prizes';
import Footer from '../Footer/Footer';
import TaskList from '../TaskList/TaskList';
import { weekRange, getDay } from '../../utils/var';
import useScreenWidth from '../../utils/utils';
import dashboard from '../../redux/dashboard';

import styles from './DashboardConteiner.module.css';

moment.locale('uk');

const DashboardConteiner = ({ tasks, activeDay, allPoints, currentPoints }) => {
  const dayTitle = getDay(activeDay);
  const screenWidth = useScreenWidth();
  return (
    <div className={styles.conteiner}>
      <WeekRange weekRange={weekRange} />
      <CurrentDayTitle dayTitle={dayTitle} />
      {screenWidth >= 768 && <ProgressBar currentPoints={currentPoints} allPoints={allPoints} />}
      {tasks ? (
        <TaskList tasks={tasks} />
      ) : (
        <p
          style={{
            flex: '1 0',
            textAlign: 'center',
            // justifyContent: 'center',
            // alignItems: 'center',
            padding: 0,
            marginTop: '10%',
            marginBottom: '26%'
          }}
        >
          На цей день немає завдань {'🙁'}
        </p>
      )}
      {screenWidth < 1280 && (
        <>
          <Prizes />
          <Footer />
        </>
      )}
      {screenWidth >= 1280 && <Footer />}
    </div>
  );
};

DashboardConteiner.propTypes = {
  tasks: PropTypes.oneOfType([PropTypes.arrayOf(), null]),
  currentPoints: PropTypes.number,
  allPoints: PropTypes.number,
  activeDay: PropTypes.string
};

const mapStateToProps = state => ({
  tasks: dashboard.dashboardSelectors.getDayTasks(state),
  currentPoints: state.dashboard.data.totalDone,
  allPoints: state.dashboard.data.totalAmount,
  activeDay: state.dashboard.activeDay
});

export default connect(
  mapStateToProps,
  null
)(DashboardConteiner);
