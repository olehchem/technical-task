import styled from 'styled-components';

export const PhoneListPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PhoneListContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media only screen and (min-width: 800px) {
    width: 800px;
  }
`;
