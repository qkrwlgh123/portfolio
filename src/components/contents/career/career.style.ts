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
`;

export const CareerContentsBox = styled.div<{ isInViewport: boolean }>`
  h2 {
    font-size: 36px;
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
  }
  span {
    font-family: 'NanumGothic-ExtraBold';
  }
`;

export const EducationContentsBox = styled(CareerContentsBox)`
  margin-left: auto;
  margin-bottom: 0;
`;

export default {
  CareerContainer,
  InnerContainer,
  CareerContentsBox,
  SubcontentsContainer,
  CompanyInfoBox,
  EducationContentsBox,
};
