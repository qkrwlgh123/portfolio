import styled from 'styled-components';
import '../../styles/fonts/font.css';

const HeaderBox = styled.header<{ scrollPosition: number }>`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  button {
    font-size: 18px;
    color: ${(props) => (props.scrollPosition > 200 ? 'black' : '#ececec')};
  }
  background: ${(props) =>
    props.scrollPosition > 200 ? '#ececec' : 'transparent'};
  transition: background 0.3s ease;
  @media (max-width: 650px) {
    background: ${(props) =>
      props.scrollPosition > 80 ? '#ececec' : 'transparent'};
    button {
      color: ${(props) => (props.scrollPosition > 80 ? 'black' : '#ececec')};
      font-size: 13px;
    }
  }
`;

const InnerBox = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1000px) {
    justify-content: center;
    width: 100%;
  }
`;

const LogoBox = styled.nav`
  button {
    font-family: 'Oswald-Regular';
    font-size: 25px;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

const MenusBox = styled.nav<{ scrollPosition: number }>`
  ul {
    display: flex;
    @media (max-width: 1000px) {
      justify-content: center;
      gap: 45px;
    }
    li {
      margin-left: 60px;
      @media (max-width: 1000px) {
        margin-left: 0;
      }
      button {
        position: relative;
        &::after {
          content: '';
          display: inline-block;
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0px;
          height: 2px;
          width: 0px;
          transition: all 350ms ease-in-out;
          opacity: 0;
          background-color: ${(props) =>
            props.scrollPosition > 200 ? '#123456' : '#ffffff'};
          @media (max-width: 650px) {
            background-color: ${(props) =>
              props.scrollPosition > 80 ? '#123456' : '#ffffff'};
          }
        }
        &:hover {
          &::after {
            width: 100%;
            opacity: 1;
          }
        }
      }
    }
  }
`;

export default { HeaderBox, InnerBox, LogoBox, MenusBox };
