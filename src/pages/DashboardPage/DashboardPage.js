import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Sidebar from '../../components/Sidebar/Sidebar';
import DaysNavConteiner from '../../components/DaysNav/DaysNavConteiner';
import DashboardConteiner from '../../components/DashboardConteiner/DashboardConteiner';
// import getShowingTasks from '../../redux/dashboard/selectors';
import operations from '../../redux/dashboard/operations';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { screenWidth } from '../../utils/var';
import styles from './DashboardPage.module.css';

class DashboardPage extends Component {
  componentDidMount() {
    const { tasksFetch } = this.props;
    tasksFetch();
  }

  // handleClick = day => {
  //   const findedTasks = getShowingTasks(day);
  //   this.setState({ showingTasks: findedTasks });
  // };

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
  tasksFetch: PropTypes.func
  // showingTasks: PropTypes.arrayOf()
};

const mapDispatchToProps = {
  tasksFetch: operations.tasksFetch
  // onClick: day => dispatch(day)
};

// const mapDispatchToProps = {
//   fetchTasks: planningOperations.fetchTasks
// };
export default connect(
  null,
  mapDispatchToProps
)(DashboardPage);
// mapStateToProps,
