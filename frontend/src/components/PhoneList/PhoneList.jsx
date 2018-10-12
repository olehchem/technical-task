import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import PhoneTile from '../PhoneTile';

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
  componentDidMount() {
    this.props.fetchPhones();
  }

  render() {
    const { phones, isFetching } = this.props;

    return (
      <PhoneListWrapper>
        <ListHeader>Phones List</ListHeader>
        {isFetching && <Spinner />}
        {phones && (
          <PhoneListContainer>
            {phones.map(phone => (
              <PhoneTile {...phone} />
            ))}
          </PhoneListContainer>
        )}
      </PhoneListWrapper>
    );
  }
}

PhoneList.defaultProps = {
  phones: null,
};

PhoneList.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  phones: PropTypes.arrayOf(PropTypes.any),
  fetchPhones: PropTypes.func.isRequired,
};

export default PhoneList;
