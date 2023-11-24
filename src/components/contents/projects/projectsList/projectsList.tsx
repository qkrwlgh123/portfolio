import { useState } from 'react';
import Modal from '../../../modal/modal';
import { ModalPortal } from '../../../modal/mordalPortal';
import Project from './project/project';
import Style from './projectsList.style';
import { PROJECTS_DATA } from './projectsListData';

const ProjectsList = () => {
  return (
    <Style.ProjectsListContainer>
      {PROJECTS_DATA.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </Style.ProjectsListContainer>
  );
};

export default ProjectsList;
