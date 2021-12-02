import PropTypes from 'prop-types';
import css from './friendListItem.css';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li key={id} class="item">
      <span class="status"></span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};