import styled from 'styled-components';

const TechListContainer = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 50px;
  row-gap: 65px;
  width: 90%;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default { TechListContainer };
