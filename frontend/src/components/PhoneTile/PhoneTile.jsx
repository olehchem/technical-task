import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PhoneTileStyled = styled(Link)`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.4);
  background-color: #ffffff;
  color: #4c4c4c;
  cursor: pointer;
  text-decoration: none;

  :hover {
    box-shadow: 0 0 15px 6px rgba(0, 0, 0, 0.25);
  }
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
`;

const Title = styled.span`
  color: #006880;
  font-size: 16px;
  font-weight: bold;
`;

const DetailsContainer = styled.section`
  padding: 16px;
`;

const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const DetailItemLabel = styled.span`
  font-size: 0.75em;
`;
const DetailItemValue = styled.span`
  font-size: 0.75em;
  font-weight: bold;
`;

const Divider = styled.div`
  border: solid 0.5px #d8d8d8;
  margin: 8px 0;
`;

class PhoneTile extends PureComponent {
  render() {
    const {
      title, image, price, id,
    } = this.props;

    return (
      <PhoneTileStyled to={`/phones/${id}`}>
        <Image src={image} />
        <DetailsContainer>
          <Title>{title}</Title>
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
};

export default PhoneTile;
