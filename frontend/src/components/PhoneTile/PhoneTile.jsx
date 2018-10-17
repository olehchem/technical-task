import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  PhoneTileContainer, Image, DetailsContainer, DetailItem,
} from './styled';
import {
  PhoneName, Divider, DetailItemLabel, DetailItemValue,
} from '../styled';

class PhoneTile extends PureComponent {
  onSelect = () => {
    this.props.onSelect(this.props.id);
  };

  render() {
    const {
      title, image, price, color, ram,
    } = this.props;

    return (
      <PhoneTileContainer onClick={this.onSelect}>
        <Image src={image} />
        <DetailsContainer>
          <PhoneName title={title}>{title}</PhoneName>
          <Divider />
          <DetailItem>
            <DetailItemLabel>Price</DetailItemLabel>
            <DetailItemValue>{price}</DetailItemValue>
          </DetailItem>
          <DetailItem>
            <DetailItemLabel>Color</DetailItemLabel>
            <DetailItemValue>{color}</DetailItemValue>
          </DetailItem>
          <DetailItem>
            <DetailItemLabel>RAM</DetailItemLabel>
            <DetailItemValue>{ram}</DetailItemValue>
          </DetailItem>
        </DetailsContainer>
      </PhoneTileContainer>
    );
  }
}

PhoneTile.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  ram: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default PhoneTile;
