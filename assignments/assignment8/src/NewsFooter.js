import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './NewsFooter.module.css';

const NewsFooter = ({}) => (
  <footer className = {style.NewsFooter}>
     <span>&copy;</span>
     <time className = {style.NewsFooter_time} dateTime = "2019"> 2019, </time>
     <address>&nbsp; April Bingham</address>
  </footer>
);

NewsFooter.propTypes = {
};

export default NewsFooter;
