import React from 'react';
import PropTypes from 'prop-types';
import style from './NewsHeader.module.css';

const NewsHeader = ({}) => (
  <header className = {style.NewsHeader}>
     <h2>The INFO6150 News</h2>
     <time dateTime = "2019">Wed. February 20, 2019</time>
  </header>
);

NewsHeader.propTypes = {
};

export default NewsHeader;
