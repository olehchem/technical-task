import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import PhoneTile from '../PhoneTile';
import { PageHeader } from '../styled';

const PhoneListPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PhoneListContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media only screen and (min-width: 800px) {
    width: 800px;
  }
`;

class PhoneList extends Component {
  componentDidMount() {
    this.props.fetchPhones();
  }

  render() {
    const { phones, isFetching, onPhoneSelect } = this.props;

    return (
      <PhoneListPage>
        <PageHeader>Phones List</PageHeader>
        {isFetching && <Spinner />}
        {phones && (
          <PhoneListContainer>
            {phones.map(phone => (
              <PhoneTile {...phone} onSelect={onPhoneSelect} />
            ))}
          </PhoneListContainer>
        )}
      </PhoneListPage>
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
