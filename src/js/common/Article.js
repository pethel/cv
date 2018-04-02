import React from 'react';
import styles from './Section.css';
import PropTypes from "prop-types";

const Article = ({ children }) => <article className={styles.block}>{children}</article>;

Article.propTypes = {
  children: PropTypes.any
};

export default Article;
