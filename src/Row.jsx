import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
* General component description.
*/
class Row extends Component {
  /**
  * @param {object} e The first number.
  * @returns {void}.
  */
  handleClick(e) {
    this.evt = e;
  }

  render() {
    const aa = {a: 'nn'};
    const cc = { ...aa, a: 'row'};
    return (
      <div className={cc.a}>{this.props.children}</div>
    );
  }

}

Row.propTypes = {
  /**
  * Description of prop "foo".
  */
  children: PropTypes.node,
  /**
  * Description of prop "func".
  */
  noop: PropTypes.func
};

export default Row;
