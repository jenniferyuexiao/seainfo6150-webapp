import React from 'react';
import PropTypes from 'prop-types';
import './ArticleListItem.module.css';
import styles from './ArticleListItem.module.css';

class ArticleListItem extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            title: this.props.title,
            date: this.props.date,
            year: this.props.year,
            author: this.props.author,
            shortText: this.props.shortText
        }
    }

    render() {
        return(
            <li className = {styles.article_list}>
                <h3> <b> {this.props.title} </b> </h3>
                <p> {this.props.shortText} </p>
                <a rel="{this.props.author}" href="/author"> By: {this.props.author} </a><br />
                <time dateTime={this.props.year}> {this.props.date} </time>
            </li>
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
