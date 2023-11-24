import styled from 'styled-components';

const AboutContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 36px;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
  color: #ececec;
  padding-bottom: 100px;
  border-bottom: 2px dashed rgb(206, 184, 184);
`;

const TitleBox = styled.div`
  text-align: center;
  height: 120px;
`;

const IntroSentencesBox = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  span {
    font-size: 20px;
    font-weight: 400;
  }
`;

export default { AboutContainer, TitleBox, IntroSentencesBox };
