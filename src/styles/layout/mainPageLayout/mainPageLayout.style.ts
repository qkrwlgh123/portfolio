import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to left, #123, #3b5279);
`;

const InnerBox = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  z-index: 999;
`;

export default { Container, InnerBox };
