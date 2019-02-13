import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleList.module.css';
import ArticleListItem from './ArticleListItem.js';
import './ArticleList.module.css';

let ArticleList = ({ articles }) => (
  <div className = {styles.article_list}>
  {
    // this iterates through the articles JSON and
    // calls your ArticleListItem component for each article
    Object.values(articles).map(article => {
      return <ArticleListItem
        key={article.slug}
        title={article.title}
        date={article.pubDate}
        year={article.pubYear}
        author={article.author}
        shortText={article.shortText}
      />
    })
  }
  </div>
);

ArticleList.propTypes = {
    articles: PropTypes.object.isRequired
}

export default ArticleList;
