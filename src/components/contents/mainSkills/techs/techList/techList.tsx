import TechComponent from '../techComponent/techComponent';
import { TECHS_DATA } from './techsData';
import Style from './techList.style';

const TechList = () => {
  return (
    <Style.TechListContainer>
      {TECHS_DATA.map((tech, index) => (
        <TechComponent
          key={index}
          title={tech.title}
          sentences={tech.sentences}
        />
      ))}
    </Style.TechListContainer>
  );
};

export default TechList;
