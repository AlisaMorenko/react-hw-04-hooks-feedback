import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

import styles from './feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <button
        type="button"
        onClick={onLeaveFeedback}
        key={shortid.generate()}
        className={styles.button}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
