import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Spinner from '../Spinner';
import {
  PageHeader, PhoneName, Divider, DetailItemLabel, DetailItemValue,
} from '../styled';

const PhoneDetailsPage = styled.div`
  font-size: 20px;
`;

const PhoneDetailsContainer = styled.div`
  padding: 40px;

  @media only screen and (min-width: 1000px) {
    width: 800px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.17);
    margin: 40px auto;
  }
`;

const CharacteristicContainer = styled.div`
  padding: 20px;
`;

const CharacteristicItem = styled.div`
  margin-bottom: 15px;
`;

const LargeImage = styled.img`
  width: 100%;
`;

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
                  <DetailItemLabel>{phone.description}</DetailItemLabel>
                  <DetailItemValue>{phone.description}</DetailItemValue>
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
