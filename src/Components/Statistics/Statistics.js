import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification';

import styles from './statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    {total ? (
      <ul>
        <li>
          <span className={styles.label}>Good: </span>
          {good}
        </li>
        <li>
          <span className={styles.label}>Neutral: </span>
          {neutral}
        </li>
        <li>
          <span className={styles.label}>Bad: </span>
          {bad}
        </li>
        <li>
          <span className={styles.label}>Total: </span>
          {total}
        </li>
        <li>
          <span className={styles.label}>Positive feedbacks: </span>
          {positivePercentage}%
        </li>
      </ul>
    ) : (
      <Notification message="No feedback given" />
    )}
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
