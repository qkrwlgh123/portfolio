import Project from './project/project';
import Style from './projectsList.style';
import { PROJECTS_DATA } from './projectsListData';
const ProjectsList = () => {
  return (
    <Style.ProjectsListContainer>
      {PROJECTS_DATA.map((project, index) => (
        <Project image={project.image} title={project.title} />
      ))}
    </Style.ProjectsListContainer>
  );
};

export default ProjectsList;
