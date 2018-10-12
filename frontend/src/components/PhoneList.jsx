import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PhoneTile from './PhoneTile/PhoneTile';

const PhoneListWrapper = styled.section`
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const PhoneListContainer = styled.section`
  display: flex;
  width: 1000px;
  justify-content: space-between;
`;

const ListHeader = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

class PhoneList extends Component {
  render() {
    const { phones } = this.props;

    return (
      <PhoneListWrapper>
        <ListHeader>Phones List</ListHeader>
        <PhoneListContainer>
          {phones.map(phone => (
            <PhoneTile {...phone} />
          ))}
        </PhoneListContainer>
      </PhoneListWrapper>
    );
  }
}

PhoneList.defaultProps = {
  phones: null,
};

PhoneList.propTypes = {
  phones: PropTypes.arrayOf(PropTypes.any),
};

export default PhoneList;
