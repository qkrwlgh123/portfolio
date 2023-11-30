import styled from 'styled-components';
import '../../../styles/fonts/font.css';

const CareerContainer = styled.div`
  width: 100%;
  color: #ececec;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  border-bottom: 2px dashed rgb(206, 184, 184);
`;

const InnerContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const CareerContentsBox = styled.div<{ isInViewport: boolean }>`
  h2 {
    font-size: 36px;
    @media (max-width: 750px) {
      font-size: 25px;
    }
    position: relative;
    width: fit-content;
    &::after {
      content: '';
      display: inline-block;
      position: absolute;
      left: 0;
      bottom: -4px;
      width: ${(props) => (props.isInViewport ? '100%' : '0px')};
      height: 5px;
      opacity: ${(props) => (props.isInViewport ? '1' : '0')};
      transition: all 2500ms ease-in-out;
      background-color: #3b5279;
    }
  }
  margin-bottom: 150px;
  opacity: ${(props) => (props.isInViewport ? 1 : 0)};
  transition: opacity 3s ease;
`;

export const SubcontentsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

export const CompanyInfoBox = styled.div`
  display: flex;
  align-items: end;
  margin-bottom: 20px;
  font-family: 'NanumGothic-Bold';
  h3 {
    font-size: 28px;
    margin-right: 15px;
    @media (max-width: 750px) {
      font-size: 17px;
    }
  }
  span {
    font-family: 'NanumGothic-ExtraBold';
    @media (max-width: 750px) {
      font-size: 13px;
    }
  }
`;

export const EducationContentsBox = styled(CareerContentsBox)`
  margin-left: auto;
  margin-bottom: 0;
  @media (max-width: 750px) {
    margin: 0;
  }
`;

export default {
  CareerContainer,
  InnerContainer,
  CareerContentsBox,
  SubcontentsContainer,
  CompanyInfoBox,
  EducationContentsBox,
};
