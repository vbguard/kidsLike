import React from 'react';
import WeekSelected from '../../components/WeekSelected/WeekSelected';
import Prizes from '../../components/Prizes/Prizes';
import SelectedTasksPoints from '../../components/SelectedTasksPoints/SelectedTasksPoints';
import AddTasks from '../../components/AddTasks/AddTasks';
import AddTaskModal from '../../components/AddTaskModal/AddTaskModal';
import { screenWidth } from '../../utils/var';
import styles from './PlanningPage.module.css';

const PlanningPage = () => (
  // {
  // const [openModal, setOpenModal] = useState(false);
  // const handleOpenModal = () => {
  //   console.log('onCloiee');
  //   setOpenModal(!openModal);
  // };
  // return
  <div className={styles.wrapper}>
    <WeekSelected />
    {screenWidth < 768 && <Prizes />}
    <SelectedTasksPoints />
    <AddTasks />
    <AddTaskModal />
    {/* <AddTaskModal openModal={handleOpenModal} /> */}
    {screenWidth >= 768 && <Prizes />}
    {/* {openModal && <AddTaskModal onChange={handleOpenModal} />} */}
  </div>
);

export default PlanningPage;
