import React from 'react';
import WeekSelected from '../../components/WeekSelected/WeekSelected';
import Prizes from '../../components/Prizes/Prizes';
import SelectedTasksPoints from '../../components/SelectedTasksPoints/SelectedTasksPoints';
import AddTasks from '../../components/AddTasks/AddTasks';
import { screenWidth } from '../../utils/var';
import styles from './PlanningPage.module.css';

const PlanningPage = () => (
  <div className={styles.wrapper}>
    <WeekSelected />
    {screenWidth < 768 && <Prizes />}
    <SelectedTasksPoints />
    <AddTasks />
    {screenWidth >= 768 && <Prizes />}
  </div>
);

export default PlanningPage;
