import styled from 'styled-components';

export const PageHeader = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
`;

export const PageContainer = styled.section`
  padding: 0 40px;

  @media only screen and (min-width: 1000px) {
    width: 800px;
    margin: 40px auto;
  }
`;

export const PhoneName = styled.div`
  color: #006880;
  font-weight: bold;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Divider = styled.div`
  border: solid 0.5px #d8d8d8;
  margin: 8px 0;
`;

export const DetailItemLabel = styled.span``;

export const DetailItemValue = styled.span`
  font-weight: bold;
`;
