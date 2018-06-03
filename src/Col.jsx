import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Grid.css';
/**
* General component description.
*/
class Col extends Component {

  render() {
    const { className, md, autoFitEnable, autoFit, width, ...extra } = this.props;
    const mdStyle = styles[`col-md-${md}`] || '';
    const styleClass = [styles.col, mdStyle, className];
    const style = extra.style || {}
    let extraProps = {...extra};
    if (autoFitEnable) {
      styleClass.push('vflex');
      if (width) {
        extraProps = {...extra, style:{...style, width}}
      } else {
        styleClass.push('flex-1');
      }
    } else if(autoFit) {
      styleClass.push('flex-1');
    }
    return (
      <div className={classnames(styleClass)} {...extraProps}>{this.props.children}</div>
    );
  }

}

Col.propTypes = {
  /**
  * Description of prop "foo".
  */
  children: PropTypes.node,
  /**
  * Description of prop "className".
  */
  className: PropTypes.string,
  md: PropTypes.number,
  autoFitEnable: PropTypes.bool,
  autoFit: PropTypes.bool,
  width: PropTypes.number
};

export default Col;
