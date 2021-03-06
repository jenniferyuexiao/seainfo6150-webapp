import React from 'react';
import PropTypes from 'prop-types';
import ArticleTableRow from './ArticleTableRow';

const ArticleTable = ({ articles }) => (

    <list>
    <table border="1">
  {
    // this iterates through the articles JSON and
    // calls your ArticleTableRow component for each article
    Object.values(articles).map(article => {
      return <ArticleTableRow
        key={article.slug}
        title={article.title}
        date={article.pubDate}
        author={article.author}
        shortText={article.shortText}
      />
    })
  }
  </table>
  </list>

);

ArticleTable.propTypes = {
  articles: PropTypes.object.isRequired
}

export default ArticleTable;
