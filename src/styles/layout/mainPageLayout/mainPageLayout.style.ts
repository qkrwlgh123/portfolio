import styled from 'styled-components';
import './font.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(#123, #111);
  font-family: 'NanumGothic-Regular';
`;

const InnerBox = styled.div`
  margin-top: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  z-index: 999;
`;

export default { Container, InnerBox };
