import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Sidebar from '../../components/Sidebar/Sidebar';
import DaysNavContainer from '../../components/DaysNav/DaysNavConteiner';
import DashboardContainer from '../../components/DashboardConteiner/DashboardConteiner';
import operations from '../../redux/dashboard/operations';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { screenWidth, daysOfWeek } from '../../utils/var';
import styles from './DashboardPage.module.css';

const DashboardPage = ({ tasksFetch, activeDay, currentPoints, allPoints }) => {
  const history = useHistory();
  useEffect(() => {
    tasksFetch();
    history.push(`/dashboard/${daysOfWeek[activeDay - 1].pathname}`);
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        {screenWidth >= 1280 ? <Sidebar /> : <DaysNavContainer />}
        <DashboardContainer />
      </div>
      {screenWidth < 768 && <ProgressBar currentPoints={currentPoints} allPoints={allPoints} />}
    </>
  );
};

DashboardPage.propTypes = {
  tasksFetch: PropTypes.func,
  activeDay: PropTypes.number,
  currentPoints: PropTypes.number,
  allPoints: PropTypes.number
};

const mapStateToProps = state => ({
  activeDay: state.dashboard.activeDay,
  currentPoints: state.dashboard.data.totalDone,
  allPoints: state.dashboard.data.totalAmount
});

const mapDispatchToProps = {
  tasksFetch: operations.tasksFetch
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPage);
