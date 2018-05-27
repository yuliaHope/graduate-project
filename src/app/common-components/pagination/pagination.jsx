import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './pagination.css';

export default class Pagination extends Component {
  static propTypes = {
    className: PropTypes.string,
    offset: PropTypes.number,
    totalPage: PropTypes.number,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    offset: 0,
    totalPage: 0,
    onChange: () => {},
    className: '',
  };

  onChange = newPageNumber => event => {
    const { totalPage } = this.props;
    // if (newPageNumber === 0) {
    //   newPageNumber = 1;
    // }
    const isValidNumber = newPageNumber > 0 && newPageNumber <= totalPage;
    if (isValidNumber) {
      this.props.onChange(event, newPageNumber);
    }
  };

  currentPage = () => {
    if (!this.props.offset) {
      return this.props.offset + 1;
    }
    const percent = this.props.offset / 10;
    return Math.floor(percent * this.props.totalPage);
  };

  render() {
    const { totalPage, className } = this.props;
    const paginationClasses = classNames(className, 'pagination');
    const currPageCalledOnceForHaluzo = this.currentPage();
    return (
      <div className={paginationClasses}>
        <i
          className="material-icons"
          role="button"
          tabIndex={0}
          onClick={this.onChange(currPageCalledOnceForHaluzo - 1)}
        >
          keyboard_arrow_left
        </i>
        <span>
          {currPageCalledOnceForHaluzo} / {totalPage}
        </span>
        <i
          className="material-icons"
          role="button"
          tabIndex={0}
          onClick={this.onChange(currPageCalledOnceForHaluzo + 1)}
        >
          keyboard_arrow_right
        </i>
      </div>
    );
  }
}
