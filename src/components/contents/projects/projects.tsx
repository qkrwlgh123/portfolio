import { forwardRef, useRef } from 'react';
import Style from './projects.style';
import ProjectsList from './projectsList/projectsList';
import useIntersectionObsever from '../../../hooks/useIntersectionObserver';

const Projects = forwardRef((props, ref) => {
  const isVisibleRef = useRef(null);
  const isInViewport = useIntersectionObsever(isVisibleRef);
  return (
    <Style.ProjectsContainer ref={isVisibleRef} isInViewport={isInViewport}>
      <div>
        <h2>Projects</h2>
      </div>
      <ProjectsList ref={ref} />
    </Style.ProjectsContainer>
  );
});

export default Projects;
