import styled from 'styled-components';

const ProfileBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  padding: 60px 0px 60px 60px;
  background-color: #ececec;
  border-radius: 6px;
  z-index: 1;
  h2 {
    color: #000000;
    @media (max-width: 1000px) {
      text-align: center;
    }
    @media (max-width: 650px) {
      font-size: 25px;
    }
  }
  @media (max-width: 1000px) {
    width: 100%;
    padding: 30px 30px 0 30px;
  }
`;

const ProfileInnerBox = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImageBox = styled.div`
  display: flex;
  width: 250px;
  height: 360px;
  margin-right: 60px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

const ProfileList = styled.div`
  width: 540px;
  height: 360px;
  font-size: 20px;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 650px) {
    width: 100%;
    font-size: 16px;
  }
  color: rgba(0, 0, 0, 0.7);
  ul {
    width: 480px;
    @media (max-width: 650px) {
      width: 100%;
    }
    margin: 10px auto;
    padding: 10px 20px;
    li {
      display: flex;
      align-items: center;
      margin-bottom: 16px;

      span {
        padding-left: 30px;
      }
    }
  }
`;

export default {
  ProfileBoxContainer,
  ProfileInnerBox,
  ProfileImageBox,
  ProfileList,
};
