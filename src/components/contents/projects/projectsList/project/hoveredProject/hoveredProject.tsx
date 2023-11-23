import Style from './hoveredProject.style';

const HoveredProject = ({ title }: { title: string }) => {
  return (
    <Style.HoveredProjectBox>
      <Style.InnerBox>{title}</Style.InnerBox>
    </Style.HoveredProjectBox>
  );
};

export default HoveredProject;
