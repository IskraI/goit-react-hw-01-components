import css from './Profile.module.css';
import PropTypes from 'prop-types';
import { AiOutlineLike } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';

export const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className={css.profile}>
    <div className={css.description}>
      <img src={avatar} alt="User avatar" className={css.avatar} />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>{tag}</p>

      <p className={css.location}>{location}</p>
    </div>

    <ul className={css.stats}>
      <li>
        <AiOutlineUsergroupAdd />
        {/* <span className={css.label}>Followers</span> */}
        <span className={css.quantity}>{stats.followers}</span>
      </li>
      <li>
        <AiOutlineEye />
        {/* <span className={css.label}>Views</span> */}
        <span className={css.quantity}>{stats.views}</span>
      </li>
      <li>
        <AiOutlineLike />
        {/* <span className={css.label}>Likes</span> */}
        <span className={css.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
