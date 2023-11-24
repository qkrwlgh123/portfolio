import styled from 'styled-components';

const FooterContainer = styled.footer`
  position: absolute;
  left: 0;
  right: 0;
`;

const FooterInnerBox = styled.div`
  background-color: #7882a4;
  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 80px;
    padding: 20px;
    font-size: 16px;
    color: #fff;
  }
`;

const ShapeBox = styled.div`
  position: absolute;
  bottom: 78px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
  svg {
    position: relative;
    display: block;
    width: calc(114% + 1.3px);
    height: 60px;
    path {
      fill: #7882a4;
    }
  }
`;

export default { FooterContainer, FooterInnerBox, ShapeBox };
