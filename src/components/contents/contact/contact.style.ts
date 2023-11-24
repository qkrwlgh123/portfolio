import styled from 'styled-components';

const ContactContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  width: 64%;
  padding-bottom: 130px;
`;

const ContactIntroBox = styled.div`
  width: 460px;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  background-color: #ffffff;
  h2 {
    display: flex;
    align-items: center;
    color: #000000;
    font-size: 28px;
    margin-bottom: 25px;
  }
  span {
    margin-bottom: 25px;
  }
  svg {
    margin-left: 7px;
  }
`;

const ImageBox = styled.div`
  width: 300px;
  height: 260px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const SendEmailBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 460px;
  input,
  textarea {
    width: 100%;
    padding: 12px 20px;
    border: 2px solid #123456;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.7);
    margin-bottom: 16px;
  }
  textarea {
    height: 300px;
    resize: none;
    &:focus {
      outline: none;
    }
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 12px 0;
  background-color: #525e75;
  color: #ffffff;
  &:hover {
    background-color: #3c5788;
  }
`;

export default {
  ContactContainer,
  ContactIntroBox,
  ImageBox,
  SendEmailBox,
  SubmitButton,
};
