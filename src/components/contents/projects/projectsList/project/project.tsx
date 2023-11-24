import { useRef, useState } from 'react';
import Style from './project.style';
import HoveredProject from './hoveredProject/hoveredProject';
import { ModalPortal } from '../../../../modal/mordalPortal';
import Modal from '../../../../modal/modal';
import { ProjectDataType } from '../projectsListData';
import useIntersectionObsever from '../../../../../hooks/useIntersectionObserver';

const Project = (props: ProjectDataType) => {
  const isVisibleRef = useRef(null);
  const isInViewport = useIntersectionObsever(isVisibleRef);

  const [isHover, setIsHover] = useState(false);

  const [isModalOpened, setIsModalOpened] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpened((prev) => !prev);
  };
  return (
    <>
      {isModalOpened && (
        <ModalPortal>
          <Modal {...{ ...props, isModalOpened, handleOpenModal }} />
        </ModalPortal>
      )}
      <Style.ProjectBox
        ref={isVisibleRef}
        isInViewport={isInViewport}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={handleOpenModal}
      >
        <img src={props.image} alt="image" />
        {isHover && <HoveredProject title={props.title} />}
      </Style.ProjectBox>
    </>
  );
};

export default Project;
