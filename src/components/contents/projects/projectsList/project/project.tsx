import { useState } from 'react';
import Style from './project.style';
import HoveredProject from './hoveredProject/hoveredProject';

const Project = ({ image, title }: { image: string; title: string }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Style.ProjectBox
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover && <HoveredProject title={title} />}
    </Style.ProjectBox>
  );
};

export default Project;
