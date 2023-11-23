import SnowFlakes from '../../../styles/layout/snowFlakes/snowFlakes';
import Style from './mainSkills.style';
import TechList from './techs/techList/techList';

const MainSkills = () => {
  return (
    <>
      <SnowFlakes />
      <Style.MainSkillsContainer>
        <h2>Main Skills</h2>
        <TechList />
      </Style.MainSkillsContainer>
    </>
  );
};

export default MainSkills;
