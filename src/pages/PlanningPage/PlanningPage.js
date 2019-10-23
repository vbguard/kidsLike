import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeekSelected from '../../components/WeekSelected/WeekSelected';
import Prizes from '../../components/Prizes/Prizes';
import SelectedTasksPoints from '../../components/SelectedTasksPoints/SelectedTasksPoints';
import AddTasks from '../../components/AddTasks/AddTasks';
import AddTaskModal from '../../components/AddTaskModal/AddTaskModal';
import Footer from '../../components/Footer/Footer';
// import TaskListContainer from '../../components/TaskList/TaskListContainer';
// import TaskList from '../TaskList/TaskList';
import * as planningOperations from '../../redux/planning/planningOperations';
import { screenWidth } from '../../utils/var';
import styles from './PlanningPage.module.css';

/* eslint-disable */

// const PlanningPage = () => (
//   // {
//   // const [openModal, setOpenModal] = useState(false);
//   // const handleOpenModal = () => {
//   //   console.log('onCloiee');
//   //   setOpenModal(!openModal);
//   // };
//   // return
//   <div className={styles.wrapper}>
//     <WeekSelected />
//     {screenWidth < 768 && (
//       <>
//         {/* <TaskList /> */}
//         <Prizes />
//         <Footer />
//       </>
//     )}
//     <SelectedTasksPoints />
//     <AddTasks />
//     <AddTaskModal />
//     {/* <AddTaskModal openModal={handleOpenModal} /> */}
//     {screenWidth >= 768 && (
//       <>
//         {/* <TaskList /> */}
//         <Prizes />
//         <Footer />
//       </>
//     )}
//     {/* {openModal && <AddTaskModal onChange={handleOpenModal} />} */}
//   </div>
// );

// export default PlanningPage;

class PlanningPage extends Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <WeekSelected />
        {screenWidth < 768 && (
          <>
            {/* <TaskList /> */}
            {/* <TaskListContainer /> */}
            <Prizes />
            <Footer />
          </>
        )}
        <SelectedTasksPoints />
        <AddTasks />
        <AddTaskModal />
        {/* <AddTaskModal openModal={handleOpenModal} /> */}
        {screenWidth >= 768 && (
          <>
            {/* <TaskList /> */}
            {/* <TaskListContainer /> */}
            <Prizes />
            <Footer />
          </>
        )}
        {/* {openModal && <AddTaskModal onChange={handleOpenModal} />} */}
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchTasks: planningOperations.fetchTasks
};

export default connect(
  null,
  mapDispatchToProps
)(PlanningPage);
