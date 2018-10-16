import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  PhoneName, Divider, DetailItemLabel, DetailItemValue,
} from '../styled';

const PhoneTileStyled = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.4);
  background-color: #ffffff;
  color: #4c4c4c;
  cursor: pointer;
  text-decoration: none;
  width: 240px;
  margin-bottom: 20px;

  :hover {
    box-shadow: 0 0 15px 6px rgba(0, 0, 0, 0.25);
  }
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
`;

const DetailsContainer = styled.section`
  padding: 16px;
`;

const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

class PhoneTile extends PureComponent {
  onSelect = () => {
    this.props.onSelect(this.props.id);
  };

  render() {
    const { title, image, price } = this.props;

    return (
      <PhoneTileStyled onClick={this.onSelect}>
        <Image src={image} />
        <DetailsContainer>
          <PhoneName title={title}>{title}</PhoneName>
          <Divider />
          <DetailItem>
            <DetailItemLabel>Price</DetailItemLabel>
            <DetailItemValue>{price}</DetailItemValue>
          </DetailItem>
          <DetailItem>
            <DetailItemLabel>Display</DetailItemLabel>
            <DetailItemValue>{price}</DetailItemValue>
          </DetailItem>
          <DetailItem>
            <DetailItemLabel>RAM</DetailItemLabel>
            <DetailItemValue>{price}</DetailItemValue>
          </DetailItem>
        </DetailsContainer>
      </PhoneTileStyled>
    );
  }
}

PhoneTile.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default PhoneTile;
