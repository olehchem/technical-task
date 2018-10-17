import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../Spinner';

import {
  PhoneDetailsContainer,
  LargeImage,
  PhoneDetailsPage,
  CharacteristicContainer,
  CharacteristicItem,
} from './styled';
import {
  PhoneName, Divider, DetailItemLabel, DetailItemValue,
} from '../styled';

class PhoneDetails extends Component {
  componentDidMount() {
    if (!this.props.phone) {
      this.props.selectPhone();
      this.props.fetchPhones();
    }
  }

  render() {
    const { phone, isFetching } = this.props;

    return (
      <PhoneDetailsPage>
        {isFetching && <Spinner />}
        {phone && (
          <React.Fragment>
            <PhoneDetailsContainer>
              <LargeImage src={phone.image} />
              <CharacteristicContainer>
                <CharacteristicItem>
                  <PhoneName>{phone.title}</PhoneName>
                </CharacteristicItem>
                <Divider />
                <CharacteristicItem>
                  <DetailItemLabel>{phone.description}</DetailItemLabel>
                </CharacteristicItem>
                <CharacteristicItem>
                  <DetailItemLabel>Price: </DetailItemLabel>
                  <DetailItemValue>{`${phone.price} $`}</DetailItemValue>
                </CharacteristicItem>
                <CharacteristicItem>
                  <DetailItemLabel>Color: </DetailItemLabel>
                  <DetailItemValue>{phone.color}</DetailItemValue>
                </CharacteristicItem>
                <CharacteristicItem>
                  <DetailItemLabel>RAM: </DetailItemLabel>
                  <DetailItemValue>{phone.ram}</DetailItemValue>
                </CharacteristicItem>
              </CharacteristicContainer>
            </PhoneDetailsContainer>
          </React.Fragment>
        )}
      </PhoneDetailsPage>
    );
  }
}

PhoneDetails.defaultProps = {
  phone: null,
};

PhoneDetails.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  phone: PropTypes.shape({}),
  fetchPhones: PropTypes.func.isRequired,
  selectPhone: PropTypes.func.isRequired,
};

export default PhoneDetails;
