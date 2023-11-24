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
  width: 50%;
  height: fit-content;
  padding: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  background-color: #ececec;
  color: #111;
`;

const TitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  div:first-child h1 {
    font-family: 'NanumGothic-Bold';
    font-weight: 800;
    font-size: 30px;
  }

  div:last-child h3 {
    color: #6c757d;
    margin: 20px 0;
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
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
  div:first-child {
    border-bottom: 1px solid #cccccc;
    padding-bottom: 20px;
  }
  div:last-child {
    display: flex;
    flex-direction: column;
  }
`;

export default {
  ModalBackground,
  ModalInnerBox,
  TitleBox,
  ContentsContainer,
  ImageBox,
  TextsContainer,
};
