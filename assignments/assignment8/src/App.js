import React, { Component } from 'react';
import ArticleList from './ArticleList/ArticleList.js';
import articles from './data/articles.json';
import NewsHeader from './NewsHeader.js';
import NewsFooter from './NewsFooter.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewsHeader/>
        <ArticleList articles={articles} />
        <NewsFooter/>
      </div>
    );
  }
}

export default App;
