import React from 'react';
import PropTypes from 'prop-types';
import './ArticleListItem.module.css';

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
            <div group="group">
            <ul>
                <li> <h3> <b> {this.props.title} </b> </h3> </li>
                <li> <p> {this.props.shortText} </p> </li>
                <li> <address> <a rel="{this.props.author}" href="/author"> By: {this.props.author} </a> </address> </li>
                <li> <time dateTime={this.props.date}> {this.props.date} </time> </li>
            </ul>
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
