import styled from 'styled-components';
import '../../../../../styles/fonts/font.css';

const TechBox = styled.div<{ isInViewport: boolean }>`
  border: 3px solid #ececec;
  color: #ececec;
  border-radius: 1rem;
  padding: 60px 0 30px 30px;
  display: flex;
  line-height: 2;
  position: relative;
  opacity: ${(props) => (props.isInViewport ? 1 : 0)};
  transition: opacity 3s ease;
  width: 100%;
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

const SentencesBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export default { TechBox, TitleBox, SentencesBox };
