import styled from 'styled-components';

export const PhoneDetailsPage = styled.div`
  font-size: 20px;
`;

export const PhoneDetailsContainer = styled.div`
  padding: 40px;

  @media only screen and (min-width: 1000px) {
    width: 800px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.17);
    margin: 40px auto;
  }
`;

export const CharacteristicContainer = styled.div`
  padding: 20px;
`;

export const CharacteristicItem = styled.div`
  margin-bottom: 15px;
`;

export const LargeImage = styled.img`
  width: 100%;
`;
