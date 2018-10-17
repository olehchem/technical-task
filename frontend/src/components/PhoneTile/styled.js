import styled from 'styled-components';

export const PhoneTileContainer = styled.div`
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

export const Image = styled.img`
  width: 200px;
  height: 200px;
`;

export const DetailsContainer = styled.section`
  padding: 16px;
`;

export const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;
