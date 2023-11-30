import styled from 'styled-components';
import '../../../../../styles/fonts/font.css';

const TechBox = styled.div<{ isInViewport: boolean }>`
  border: 3px solid #ececec;
  color: #ececec;
  border-radius: 1rem;
  padding: 60px 10px 30px 30px;
  @media (max-width: 650px) {
    padding: 40px 10px 30px 30px;
  }
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
  background: #3b5279;
  @media (max-width: 650px) {
    font-size: 22px;
  }
`;

const SentencesBox = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 650px) {
    font-size: 14px;
  }
`;

export default { TechBox, TitleBox, SentencesBox };
