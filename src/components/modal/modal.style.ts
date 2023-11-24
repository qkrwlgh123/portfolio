import styled from 'styled-components';
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
  width: fit-content;
  height: fit-content;
  padding: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  color: #212529;
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
  }

  div:last-child h3 {
    color: #6c757d;
    margin: 20px 0 30px 0;
  }
`;

const ContentsContainer = styled.div`
  display: flex;
`;

const ImageBox = styled.div`
  width: 150%;
  height: 150%;
  margin-right: 40px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const TextsContainer = styled.div`
  line-height: 1.5;
  font-weight: 800;
  font-size: 16px;
`;

const IntroduceTextBox = styled.div`
  border-bottom: 1px solid #cccccc;
  padding-bottom: 20px;
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
  UsedTechsBox,
  TopicBox,
  SubjectBox,
  ContentBox,
};
