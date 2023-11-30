import styled, { keyframes } from 'styled-components';

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

const TitleBox = styled.div<{ isSentenceCompleted: boolean }>`
  text-align: center;
  height: 120px;
  @media (max-width: 650px) {
    font-size: 25px;
  }
  span {
    span {
      position: relative;
      &::after {
        content: '';
        display: inline-block;
        position: absolute;
        left: 0;
        bottom: -4px;
        width: ${(props) => (props.isSentenceCompleted ? '100%' : '0px')};
        height: 5px;
        opacity: ${(props) => (props.isSentenceCompleted ? '1' : '0')};
        transition: all 350ms ease-in-out;
        background-color: #3b5279;
      }
    }
  }
`;

const IntroSentencesBox = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  span {
    font-size: 20px;
    font-weight: 400;
    @media (max-width: 650px) {
      font-size: 15px;
    }
  }
`;

export default { AboutContainer, TitleBox, IntroSentencesBox };
