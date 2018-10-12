import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Spinner from '../Spinner';
import { PageHeader } from '../styled';

const PageWrapper = styled.div``;

const PhoneDetailsContainer = styled.div`
  padding: 0 40px;

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
      <PageWrapper>
        {isFetching && <Spinner />}
        {phone && (
          <React.Fragment>
            <PhoneDetailsContainer>
              <PageHeader>Phones List</PageHeader>
              <LargeImage src={phone.image} />
              <CharacteristicContainer>
                <CharacteristicItem>
                  <h1>{phone.title}</h1>
                </CharacteristicItem>
                <CharacteristicItem>
                  <h1>{phone.description}</h1>
                </CharacteristicItem>
                <CharacteristicItem>
                  <h1>{phone.description}</h1>
                </CharacteristicItem>
              </CharacteristicContainer>
            </PhoneDetailsContainer>
          </React.Fragment>
        )}
      </PageWrapper>
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
