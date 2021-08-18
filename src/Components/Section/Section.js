import React from 'react';
import PropTypes from 'prop-types';
import styles from './section.module.css';

const Section = ({ title, children }) => (
  <section className={styles.container}>
    <h1 className={styles.title}>{title}</h1>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
