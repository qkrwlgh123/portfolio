import Style from './projects.style';
import ProjectsList from './projectsList/projectsList';

const Projects = () => {
  return (
    <Style.ProjectsContainer>
      <div>
        <h2>Projects</h2>
      </div>
      <ProjectsList />
    </Style.ProjectsContainer>
  );
};

export default Projects;
