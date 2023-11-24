import { useState } from 'react';
import Style from './project.style';
import HoveredProject from './hoveredProject/hoveredProject';
import { ModalPortal } from '../../../../modal/mordalPortal';
import Modal from '../../../../modal/modal';
import { ProjectDataType } from '../projectsListData';

const Project = (props: ProjectDataType) => {
  const [isHover, setIsHover] = useState(false);

  const [isModalOpened, setIsModalOpened] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpened((prev) => !prev);
  };
  return (
    <>
      {isModalOpened && (
        <ModalPortal>
          <Modal {...props} />
        </ModalPortal>
      )}
      <Style.ProjectBox
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
