import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Sidebar from '../../components/Sidebar/Sidebar';
import DaysNavConteiner from '../../components/DaysNav/DaysNavConteiner';
import DashboardConteiner from '../../components/DashboardConteiner/DashboardConteiner';
import dashboard from '../../redux/dashboard';
// import Footer from '../../components/Footer/Footer';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { screenWidth } from '../../utils/var';
import styles from './DashboardPage.module.css';

class DashboardPage extends Component {
  // useEffect(async () => {
  // getTasks();
  // action - який буде робити запит на бекенд на отримання завдань - потім їх пасати в стор
  // цей самий екшн буде робити перевірку чи юзер авторизований, якщо буде 401 статус код - має робитись редірект на логін
  // }, []);
  componentDidMount() {
    this.props.fetchTasks();
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
  fetchTasks: PropTypes.func
};

const mapDispatchToProps = {
  fetchTasks: () => dashboard.tasksFetch()
};

export default connect(
  null,
  mapDispatchToProps
)(DashboardPage);
