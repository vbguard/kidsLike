import { connect } from 'react-redux';
import TaskList from './TaskList';

const mapStateToPrips = state => ({
  tasks: state.data
});

export default connect(
  mapStateToPrips,
  null
)(TaskList);
