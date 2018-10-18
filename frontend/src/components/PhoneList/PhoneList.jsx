import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../Spinner';
import PhoneTile from '../PhoneTile';

import { PhoneListPage, PhoneListContainer } from './styled';
import { PageHeader } from '../styled';

import { PhonesType } from '../../types';

class PhoneList extends Component {
  componentDidMount() {
    this.props.fetchPhones();
  }

  render() {
    const { phones, isFetching, onPhoneSelect } = this.props;

    return (
      <PhoneListPage>
        <PageHeader className="page-header">Phones List</PageHeader>
        {isFetching && <Spinner />}
        {phones && (
          <PhoneListContainer className="phone-list-container">
            {phones.map(phone => (
              <PhoneTile key={phone.id} {...phone} onSelect={onPhoneSelect} />
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
  phones: PhonesType,
  fetchPhones: PropTypes.func.isRequired,
  onPhoneSelect: PropTypes.func.isRequired,
};

export default PhoneList;
