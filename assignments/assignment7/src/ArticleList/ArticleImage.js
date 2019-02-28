import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleImage.module.css';

class ArticleImage extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      url: this.props.data.url,
      title: this.props.data.title
    }
  }

  render(){
    return(
      <div className = {styles.article_image}>
      <img src={this.state.url} alt={this.state.title} title={this.state.title}></img>
      </div>
    );
  }
}
ArticleImage.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}


export default ArticleImage;
