import { forwardRef, useRef } from 'react';
import SnowFlakes from '../../../styles/layout/snowFlakes/snowFlakes';
import Style from './mainSkills.style';
import TechList from './techs/techList/techList';
import useIntersectionObsever from '../../../hooks/useIntersectionObserver';

const MainSkills = forwardRef((props, ref) => {
  const isVisibleRef = useRef(null);
  const isInViewport = useIntersectionObsever(isVisibleRef);
  return (
    <>
      <SnowFlakes />
      <Style.MainSkillsContainer ref={isVisibleRef} isInViewport={isInViewport}>
        <h2>Main Skills</h2>
        <TechList ref={ref} />
      </Style.MainSkillsContainer>
    </>
  );
});

export default MainSkills;
