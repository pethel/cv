import React from 'react';
import styles from './OrderedList.css';

const OrderedList = ({ children }) => <ol className={styles.ol}>{children}</ol>;

export default OrderedList;
