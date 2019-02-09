import React from 'react';
import PropTypes from 'prop-types';

class ArticleTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.title = props.title,
      author: this.author = props.author,
      date: this.date = props.date,
      shortText: this.shortText = props.shortText
    };

  }

  onClick() {
    this.setState({
      selected: !this.state.selected
    });
  }

  render() {

    let selectedStatus;
    if (this.state.selected) {
      selectedStatus = 'Yes';
    }
    else {
      selectedStatus = 'No';
    }

    // paste this onClick handler into your checkbox;
    // you should not have to modify this code in any way
    // onClick={this.onClick.bind(this)}
    //
    return (
      <tr align="left">
      <td align="left"> <input type="checkbox" onClick= {this.onClick.bind(this)}/> {this.title} </td>
      <td> {selectedStatus} </td>
      <td> <a rel={this.author} href= "/author"> {this.author} </a> </td>
      <td> <time datetime= "2018">2018</time> </td>
      <td> {this.shortText} </td>
      </tr>
    );
  }

}

ArticleTableRow.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  shortText: PropTypes.string.isRequired
};

export default ArticleTableRow;
