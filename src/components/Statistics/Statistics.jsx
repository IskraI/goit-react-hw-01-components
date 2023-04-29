import PropTypes from 'prop-types';
import { StatisticsCard } from '../StatisticsCard/StatisticsCard';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
    <ul className={css.statList}>
      {stats.map(({ id, label, percentage }) => (
        <StatisticsCard key={id} label={label} percentage={percentage} />
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
};
