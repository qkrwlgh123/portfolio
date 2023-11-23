import styled from 'styled-components';

const HoveredProjectBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: gray;
`;

const InnerBox = styled.div`
  width: 70%;
  height: 70%;
  border: 2px solid #ececec;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  color: #ececec;
  font-size: 16px;
`;

export default { HoveredProjectBox, InnerBox };