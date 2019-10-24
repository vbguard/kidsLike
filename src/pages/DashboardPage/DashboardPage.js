import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Sidebar from '../../components/Sidebar/Sidebar';
import DaysNavConteiner from '../../components/DaysNav/DaysNavConteiner';
import DashboardConteiner from '../../components/DashboardConteiner/DashboardConteiner';
import getShowingTasks from '../../redux/dashboard/selectors';
import tasksFetch from '../../redux/dashboard/operations';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { screenWidth } from '../../utils/var';
import styles from './DashboardPage.module.css';
// import { dispatch } from '../../../../AppData/Local/Microsoft/TypeScript/3.3/node_modules/rxjs/internal/observable/pairs';

class DashboardPage extends Component {
  componentDidMount() {
    this.props.tasksFetch();
  }

  state = {
    showingTasks: null
  };

  handleClick = day => {
    const findedTasks = getShowingTasks(day);
    this.setState({ showingTasks: findedTasks });
  };

  render() {
    const { showingTasks } = this.state;
    return (
      <>
        <div className={styles.wrapper}>
          {screenWidth >= 1280 ? (
            <Sidebar onClick={this.handleClick} />
          ) : (
            <DaysNavConteiner onClick={this.handleClick} />
          )}
          <DashboardConteiner tasks={showingTasks} />
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
  tasksFetch
  // onClick: day => dispatch(day)
};

export default connect(
  // mapStateToProps,
  null,
  mapDispatchToProps
)(DashboardPage);
