import moment from 'moment';
import 'moment/locale/uk';
moment.locale('uk');

export const daysOfWeek = [
  { id: 1, largeName: 'Понеділок', shortName: 'Пн', pathname: 'monday' },
  { id: 2, largeName: 'Вівторок', shortName: 'Вт', pathname: 'tuesday' },
  { id: 3, largeName: 'Середа', shortName: 'Ср', pathname: 'wednesday' },
  { id: 4, largeName: 'Четвер', shortName: 'Чт', pathname: 'thursday' },
  { id: 5, largeName: 'Пятниця', shortName: 'Пт', pathname: 'friday' },
  { id: 6, largeName: 'Субота', shortName: 'Сб', pathname: 'sarturday' },
  { id: 7, largeName: 'Неділя', shortName: 'Нд', pathname: 'sunday' }
];

export const screenWidth = window.innerWidth;

export const prizesStyles = {
  flexDirection: 'row',
  width: '400px',
  backgroundColor: 'transparent',
  justifyContent: 'space-between',
  margin: '0 auto'
};

export const weekRange = `${moment()
  .startOf('week')
  .format('DD MMMM')} - ${moment()
  .startOf('week')
  .add(6, 'days')
  .format('DD MMMM')}`;

export const currentWeekRange = `${moment()
  .startOf('week')
  .format('L')
  .substring(0, 5)} - ${moment()
  .startOf('week')
  .add(6, 'days')
  .format('L')}`;

export const nextWeekRange = `${moment()
  .startOf('week')
  .add(1, 'week')
  .format('L')
  .substring(0, 5)} - ${moment()
  .startOf('week')
  .add(1, 'week')
  .add(6, 'days')
  .format('L')}`;

export const getDay = num => {
  const data = moment()
    .startOf('week')
    .add(num - 1, 'days')
    .format('dddd, DD MMMM');
  if (data) return data;
};
