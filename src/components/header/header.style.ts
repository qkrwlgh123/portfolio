import styled from 'styled-components';

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

const MenusBox = styled.nav<{ scrollPosition: number }>`
  ul {
    display: flex;
    li {
      margin-left: 60px;
      button {
        color: ${(props) => (props.scrollPosition > 100 ? 'black' : '#ececec')};
        font-size: 16px;
      }
    }
  }
`;

export default { HeaderBox, InnerBox, MenusBox };
