import React from 'react';
import WeekRange from '../WeekRange/WeekRange';
import CurrentDayTitle from '../CurrentDayTitle/CurrentDayTitle';
import ProgressBar from '../ProgressBar/ProgressBar';
import Prizes from '../Prizes/Prizes';
import Footer from '../Footer/Footer';
import TaskList from '../TaskList/TaskList';
import { screenWidth } from '../../utils/var';
import styles from './DashboardConteiner.module.css';

const tasks = [
  {
    id: '5da7355b369e7f180c1d6ec5',
    cardTitle: 'полити квіти',
    imageUrl: '../../assets/images/tasksImage/pic-6.png'
  },
  {
    id: '5da73754369e7f180c1d6ec7',
    cardTitle: 'пропилососити',
    imageUrl: 'https://lincoln.jorik.date/api/v1/images/300/pic6.jpg'
  },
  {
    id: '5da8a098c5c8e737b8dd2b27',
    cardTitle: 'викинути сміття',
    imageUrl: 'https://lincoln.jorik.date/api/v1/images/300/pic6.jpg'
  },
  {
    id: '5da8a0adc5c8e737b8dd2b28',
    cardTitle: 'помити підлогу',
    imageUrl: 'https://lincoln.jorik.date/api/v1/images/300/pic6.jpg'
  },
  {
    id: '5da8a21cc5c8e737b8dd2b2a',
    cardTitle: 'підмести',
    imageUrl: 'https://lincoln.jorik.date/api/v1/images/300/pic6.jpg'
  },
  {
    id: '5da8a257c5c8e737b8dd2b2b',
    cardTitle: 'прибрати у шафі',
    imageUrl: 'https://lincoln.jorik.date/api/v1/images/300/pic6.jpg'
  },
  {
    id: '5da9de82e788312e686d6f78',
    cardTitle: 'пропилососити',
    imageUrl: 'https://lincoln.jorik.date/api/v1/images/300/pic6.jpg'
  }
];

const DashboardConteiner = () => (
  <div className={styles.conteiner}>
    <WeekRange />
    <CurrentDayTitle />
    {screenWidth >= 768 && <ProgressBar />}
    <TaskList tasks={tasks} />
    {screenWidth < 1280 && (
      <>
        <Prizes />
        <Footer />
      </>
    )}
    {screenWidth >= 1280 && <Footer />}
  </div>
);

export default DashboardConteiner;
