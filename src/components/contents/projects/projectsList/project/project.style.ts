import styled from 'styled-components';

const ProjectBox = styled.div<{ isInViewport: boolean }>`
  width: 320px;
  height: 280px;
  background: #ececec;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  position: relative;
  opacity: ${(props) => (props.isInViewport ? 1 : 0)};
  transition: opacity 3s ease;
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  @media (max-width: 650px) {
    width: 160px;
    height: 140px;
  }
`;

export default { ProjectBox };
