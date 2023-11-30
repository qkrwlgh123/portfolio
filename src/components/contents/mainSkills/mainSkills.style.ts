import styled from 'styled-components';

const MainSkillsContainer = styled.div<{ isInViewport: boolean }>`
  margin-top: 100px;
  padding-bottom: 100px;
  border-bottom: 2px dashed rgb(206, 184, 184);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    color: #ececec;
    font-size: 36px;
    @media (max-width: 650px) {
      font-size: 25px;
    }
    position: relative;
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
`;

export default { MainSkillsContainer };
