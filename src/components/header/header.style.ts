import styled from 'styled-components';
import '../../styles/fonts/font.css';

const HeaderBox = styled.header<{ scrollPosition: number }>`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  position: sticky;
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
  transition: background 0.3s ease; // 부드러운 전환을 위한 트랜지션 추가
`;

const InnerBox = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-between;
`;

const LogoBox = styled.nav`
  button {
    font-family: 'Oswald-Regular';
    font-size: 25px;
  }
`;

const MenusBox = styled.nav`
  ul {
    display: flex;
    li {
      margin-left: 60px;
    }
  }
`;

export default { HeaderBox, InnerBox, LogoBox, MenusBox };
