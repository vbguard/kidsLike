import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Sidebar from '../../components/Sidebar/Sidebar';
import DaysNavConteiner from '../../components/DaysNav/DaysNavConteiner';
import DashboardConteiner from '../../components/DashboardConteiner/DashboardConteiner';
import operations from '../../redux/dashboard/operations';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { screenWidth, daysOfWeek } from '../../utils/var';
import styles from './DashboardPage.module.css';

class DashboardPage extends Component {
  componentDidMount() {
    const { tasksFetch, activeDay } = this.props;
    tasksFetch();
    this.props.history.push(`/dashboard/${daysOfWeek[activeDay - 1].pathname}`);
  }

  render() {
    return (
      <>
        <div className={styles.wrapper}>
          {screenWidth >= 1280 ? <Sidebar /> : <DaysNavConteiner />}
          <DashboardConteiner />
        </div>
        {screenWidth < 768 && <ProgressBar />}
      </>
    );
  }
}

DashboardPage.propTypes = {
  tasksFetch: PropTypes.func,
  activeDay: PropTypes.number,
  history: PropTypes.shape()
};
const mapStateToProps = state => ({
  activeDay: state.dashboard.activeDay
});

const mapDispatchToProps = {
  tasksFetch: operations.tasksFetch
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPage);
