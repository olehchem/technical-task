import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import PhoneTile from '../PhoneTile';
import { PageHeader, PageContainer } from '../styled';

const PhoneListContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

class PhoneList extends Component {
  componentDidMount() {
    this.props.fetchPhones();
  }

  render() {
    const { phones, isFetching, onPhoneSelect } = this.props;

    return (
      <PageContainer>
        <PageHeader>Phones List</PageHeader>
        {isFetching && <Spinner />}
        {phones && (
          <PhoneListContainer>
            {phones.map(phone => (
              <PhoneTile {...phone} onSelect={onPhoneSelect} />
            ))}
          </PhoneListContainer>
        )}
      </PageContainer>
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
  onPhoneSelect: PropTypes.func.isRequired,
};

export default PhoneList;
