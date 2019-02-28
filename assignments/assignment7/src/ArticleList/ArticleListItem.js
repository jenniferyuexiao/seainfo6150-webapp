import React from 'react';
import PropTypes from 'prop-types';
import './ArticleListItem.module.css';
import styles from './ArticleListItem.module.css';
import ArticleImage from './ArticleImage.js';

class ArticleListItem extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            title: this.props.title,
            date: this.props.date,
            year: this.props.year,
            author: this.props.author,
            shortText: this.props.shortText,
            url: this.props.url
        }
    }

    render() {
        return(
            <div className = {styles.article_list}>

                <div className = {styles.upper_image}>
                  <ArticleImage data = {this.state}/>
                </div>

              <div className = {styles.article_text}>
                <h3> <b> {this.props.title} </b> </h3>
                <p> {this.props.shortText} </p>
                <a rel="{this.props.author}" href="/author"> By: {this.props.author} </a><br />
                <time dateTime={this.props.year}> {this.props.date} </time>
              </div>

            </div>
        );
    }
}

ArticleListItem.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    shortText: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
};

export default ArticleListItem;
