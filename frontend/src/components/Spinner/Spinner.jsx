import React from 'react';
import PropTypes from 'prop-types';

import ClipLoader from 'react-spinners/ClipLoader';

import { Overlay, LoaderWrapper } from './styled';

const Loader = props => (
  <Overlay className="spinner">
    <LoaderWrapper>
      <ClipLoader size={props.size} color={props.color} loading />
    </LoaderWrapper>
  </Overlay>
);

Loader.defaultProps = {
  size: 100,
  color: '#123abc',
};

Loader.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

export default Loader;
