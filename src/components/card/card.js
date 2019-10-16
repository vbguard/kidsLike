import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

const Card = ({ image = '', title = '' }) => (
  <div className={styles.Card}>
    <div className={styles.pic}>
      <img src={image} alt="img" />
    </div>
    <h2 className={styles.title}>{title}</h2>
  </div>
);

Card.defaultProps = {
  image: '../assets/images/tasksImage/pic-6@2x.png',
  title: 'Прибрати у шафi'
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string
};

// class Toggle extends Component {
//     state = { on: false };

//     toggle = () => {
//         this.setState(prevState => ({ on: !prevState.on }))
//     }

//     render() {
//         const { on } = this.state;

//         return (
//             <div>
//                 <button onClick={this.toggle}></button>
//             </div>
//         )
//     }
// }

export default Card;
