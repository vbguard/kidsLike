import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Sidebar from '../../components/Sidebar/Sidebar';
import DaysNavConteiner from '../../components/DaysNav/DaysNavConteiner';
import DashboardConteiner from '../../components/DashboardConteiner/DashboardConteiner';
import tasksFetch from '../../redux/dashboard/operations';
// import Footer from '../../components/Footer/Footer';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { screenWidth } from '../../utils/var';
import styles from './DashboardPage.module.css';
// import api from '../../utils/api';

// const getTasks = async () => {
//   const res = await api.fetchTasks();
//   console.log('res', res.data.result);
// };

class DashboardPage extends Component {
  // useEffect(async () => {
  // getTasks();
  // action - який буде робити запит на бекенд на отримання завдань - потім їх пасати в стор
  // цей самий екшн буде робити перевірку чи юзер авторизований, якщо буде 401 статус код - має робитись редірект на логін
  // }, []);
  componentDidMount() {
    this.props.tasksFetch();
  }

  render() {
    const { tasks } = this.props;

    return (
      <>
        <div className={styles.wrapper}>
          {screenWidth >= 1280 ? <Sidebar /> : <DaysNavConteiner />}
          <DashboardConteiner tasks={tasks} />
        </div>
        {screenWidth < 768 && <ProgressBar />}
      </>
    );
  }
}

DashboardPage.propTypes = {
  tasksFetch: PropTypes.func.isRequired,
  tasks: PropTypes.array(PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired).isRequired
};

const mapStateToProps = state => ({
  tasks: state.dashboard.tasks
});

const mapDispatchToProps = {
  tasksFetch
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPage);
