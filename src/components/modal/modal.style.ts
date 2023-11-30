import styled, { css } from 'styled-components';
import '../../styles/fonts/font.css';

const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100vh;
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
`;

const ModalInnerBox = styled.div`
  width: 80%;
  height: 80%;
  padding: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  color: #212529;
  overflow-y: scroll;
`;

const TitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  div:first-child h1 {
    font-family: 'NanumGothic-Bold';
    font-weight: 800;
    font-size: 30px;
    @media (max-width: 800px) {
      font-size: 20px;
    }
  }

  div:last-child h3 {
    color: #6c757d;
    margin: 20px 0 30px 0;
    @media (max-width: 800px) {
      font-size: 12px;
    }
  }
  @media (max-width: 1300px) {
    align-items: center;
  }
`;

const ContentsContainer = styled.div`
  display: flex;
  @media (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const ImageBox = styled.div`
  width: 40%;
  height: 50%;
  margin-right: 40px;
  img {
    width: 100%;
    height: 100%;
  }
  @media (min-width: 800px) and (max-width: 1300px) {
    width: 500px;
    height: 350px;
    margin-right: 0;
    margin-bottom: 30px;
  }
  @media (max-width: 800px) {
    width: 250px;
    height: 250px;
    margin-right: 0;
    margin-bottom: 15px;
  }
`;

const TextsContainer = styled.div`
  width: 60%;
  @media (max-width: 1300px) {
    width: 100%;
  }
  height: 100%;
  line-height: 1.5;
  font-weight: 800;
  font-size: 16px;
  padding-right: 20px;
  @media (max-width: 800px) {
    font-size: 12px;
    padding-right: 0;
  }
  ul {
    list-style-type: square;
    li {
      margin: 5px 0 10px 20px;
      @media (max-width: 800px) {
        margin: 5px 0 10px 10px;
      }
    }
  }
`;

const WhatIDoneList = styled.ul`
  margin-top: 20px;
`;

const boldKeyword = css`
  font-weight: bold;
  color: #e44d26; /* 볼드체 키워드의 색상 설정 */
`;

const LearnedTitle = styled.p`
  margin-top: 10px;
  font-family: 'NanumGothic-ExtraBold';
  font-size: 20px;
  @media (max-width: 800px) {
    font-size: 15px;
  }
`;

const IntroduceTextBox = styled.div`
  border-bottom: 1px solid #cccccc;
  padding-bottom: 20px;
  p {
    span {
      font-family: 'NanumGothic-ExtraBold';
      font-weight: 800;
    }
  }
`;

const UsedTechsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  gap: 10px;
`;

const TopicBox = styled.div`
  display: flex;
  width: 100%;
`;

const SubjectBox = styled.div`
  white-space: nowrap;
  font-family: 'NanumGothic-ExtraBold';
  font-weight: 800;
  width: 8.4rem;
  display: flex;
  @media (max-width: 800px) {
    width: 6rem;
  }
  svg {
    margin-right: 5px;
  }
`;

const ContentBox = styled.div`
  width: calc(100% - 8.4rem);
  a {
    color: #3091dc;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default {
  ModalBackground,
  ModalInnerBox,
  TitleBox,
  ContentsContainer,
  IntroduceTextBox,
  ImageBox,
  TextsContainer,
  WhatIDoneList,
  boldKeyword,
  LearnedTitle,
  UsedTechsBox,
  TopicBox,
  SubjectBox,
  ContentBox,
};
