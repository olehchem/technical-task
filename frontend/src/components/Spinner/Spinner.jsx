import React from 'react';
import styled from 'styled-components';

import ClipLoader from 'react-spinners/ClipLoader';

const Overlay = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
  background: rgba(255, 255, 255, 0.8);
`;

const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Loader = () => (
  <Overlay>
    <LoaderWrapper>
      <ClipLoader size={100} color="#123abc" loading />
    </LoaderWrapper>
  </Overlay>
);

export default Loader;
