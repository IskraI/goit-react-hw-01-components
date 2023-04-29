import PropTypes from 'prop-types';
import css from './StatisticsCard.module.css';
import { hexToRGB } from '../../utils/colorRandom';

export const StatisticsCard = ({ label, percentage }) => (
  <li className={css.item} style={{ backgroundColor: hexToRGB() }}>
    <span className={css.label}>{label}</span>
    <span className={css.percentage}>{percentage}%</span>
  </li>
);
StatisticsCard.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
