import React, { Component, PropTypes } from 'react';
import { compose, onlyUpdateForPropTypes, setPropTypes } from 'recompose';
import { showOnScroll } from '../../utils/scrollComponents';

export default compose(
  onlyUpdateForPropTypes,
  setPropTypes({
    children: PropTypes.node.isRequired,
    onShow: PropTypes.func.isRequired,
  }),
  showOnScroll,
)(class SalonMore extends Component {
  render(props = this.props) {
    const { children, onShow } = props;
    return (
      <div onClick={onShow}>
        {children}
      </div>
    );
  }
});