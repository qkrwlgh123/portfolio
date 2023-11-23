import styled from 'styled-components';
import '../../../../../styles/fonts/font.css';

const TechBox = styled.div<{ isInViewport: boolean }>`
  border: 3px solid #ececec;
  color: #ececec;
  border-radius: 1rem;
  padding: 52px 32px 32px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.5;
  position: relative;
  opacity: ${(props) => (props.isInViewport ? 1 : 0)};
  transition: opacity 3s ease;
`;

const TitleBox = styled.div`
  font-family: 'NanumGothic-ExtraBold';
  font-size: 32px;
  padding: 5px 20px;
  position: absolute;
  top: -30px;
  left: -3px;
  background: #123;
`;

export default { TechBox, TitleBox };
