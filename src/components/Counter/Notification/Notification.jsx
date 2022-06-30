import PropTypes from 'prop-types';
import s from './Notification.module.css';

const Notification = ({ message }) => {
  return <h3 className={s.title}>{message}</h3>;
};

Notification.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Notification;
