import styled from 'styled-components';

export const PageHeader = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const PageContainer = styled.section`
  padding: 0 40px;

  @media only screen and (min-width: 1000px) {
    width: 800px;
    margin: 40px auto;
  }
`;
